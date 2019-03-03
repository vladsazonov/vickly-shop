import {getAllMessages} from "../store/actions/messageActions";
import {fetchChats} from "../store/actions/mainActions";
import accountStore from "../store/AccountStore";
import messageStore from "../store/MessagesStore";
import {IP} from "../common";

const NEW_MESSAGE = 0;
const USER_ACTIVITY = 10;

let websocket_url =`ws://${IP}/ws/`;

class WebsocketService{
    socket;
    constructor(){
        websocket_url += accountStore.token;
    }

    run(){
        if (!accountStore.token) {
            throw Error("Cannot create websocket connection in unath session");
        }

        this.socket = new WebSocket(websocket_url);
        this.socket.onmessage = this.onMessage;
        this.socket.onerror = (err)=> {
            console.log("websocket error:"+err);
        };
        this.socket.onopen = () => {
            let interval = setInterval(() => {

                switch (this.socket.readyState) {
                    //if open - pong
                    case 1:
                        this.socket.send(JSON.stringify({}));
                        break;
                    case 2:
                    case 3:
                        clearInterval(interval);

                }
            }, 30000);
        };

        this.socket.onclose = (event) => {
            if (event.wasClean) {
                alert('Соединение закрыто чисто');
            } else {
                alert('Обрыв соединения');
            }
            alert('Код: ' + event.code + ' причина: ' + event.reason);
            if (accountStore.token) {
                this.run();
            }
        };
    }

    onMessage = (message) => {
        console.log("websocket message:"+message.data);
        const payload = JSON.parse(message.data);
        if (payload === {}){
            console.log("ws pong");
            return;
        }
        switch (payload.event) {
            case NEW_MESSAGE:
                if(payload)
                    messageStore.addMessageToEnd(payload.message.message);
                break;
            default:
                break;
        }
    };

    onError = (error) => {
        console.log(error);
    };

    updateMessageInChat = (chatId) => {
        getAllMessages(chatId);
    };

    updateUserList= () => {
        fetchChats();
    };

}

export default WebsocketService;