import {getAllMessages} from "../store/actions/messageActions";
import {fetchChats} from "../store/actions/mainActions";
import loginService from "./loginService";

const NEW_MESSAGE = 0;
const USER_ACTIVITY = 10;

let websocket_url ="ws://192.168.2.14:9000/ws/";

class WebsocketService{
    socket;
    addMessageHandler;
    constructor(addMsgHnd) {
        console.log("ws construct");
        this.addMessageHandler = addMsgHnd;
        websocket_url += loginService.getToken();
        this.socket = new WebSocket(websocket_url);
        this.socket.onmessage = this.onMessage;
        this.socket.onerror = (err)=> {
            console.log("websocket error:"+err);
        };
        this.socket.onopen = () => {
            setInterval(() => {
                this.socket.send(JSON.stringify({}));
            }, 30000);
        };

        this.socket.onclose = function(event) {
            if (event.wasClean) {
                alert('Соединение закрыто чисто');
            } else {
                alert('Обрыв соединения');
            }
            alert('Код: ' + event.code + ' причина: ' + event.reason);
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
                    this.addMessageHandler(payload.message.message);
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