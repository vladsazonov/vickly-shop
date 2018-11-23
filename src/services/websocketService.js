import {getAllMessages} from "../store/actions/messageActions";
import {fetchChats} from "../store/actions/mainActions";

const NEW_MESSAGE = "new_msg";

const websocket_url ="";

class WebsocketService{
    socket;
    constructor() {
        this.socket = new WebSocket(websocket_url);
        this.socket.onmessage = this.onMessage;
    }

    onMessage = (message) => {
        const payload = JSON.parse(message);
        switch (payload.type) {
            case NEW_MESSAGE:
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