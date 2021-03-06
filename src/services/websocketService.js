import messageStore from "../store/MessagesStore";
import {IP} from "../common";
import LotsStore from "../store/LotsStore"
import IncomesStore from "../store/IncomesStore"
import Lot from "../components/Lot";


const LOT_UPD = 0;
const USER_ACTIVITY = 10;

let websocket_url = `ws://${IP}/ws/`;

class WebsocketService {
    socket;
    token;
    running = false;

    run(token) {
        if (this.running)
            return;
        websocket_url += token;
        // if (token) {
        //     throw Error("Cannot create websocket connection in unath session");
        // }
        this.running = true;
        this.token = token;

        this.socket = new WebSocket(websocket_url);
        this.socket.onmessage = this.onMessage;
        this.socket.onerror = (err) => {
            console.log("websocket error:" + err);
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
            if (token) {
                this.run();
            }
        };
    }

    onMessage = (message) => {
        console.log("websocket message:" + message.data);
        const payload = JSON.parse(message.data);
        if (payload === {}) {
            console.log("ws pong");
            return;
        }
        console.log("ws message");
        switch (payload.event) {
            case LOT_UPD:
                if (payload){
                    LotsStore.fetchLots();
                    IncomesStore.fetchLots();
                }
                //messageStore.addMessageToEnd(payload.message.message);

                break;
            default:
                break;
        }
    };

    onError = (error) => {
        console.log(error);
    };

}

export default new WebsocketService();