import {BACKEND_URL} from "../common";
import {observable, runInAction} from "mobx";
import accountStore from "./AccountStore";


class MessagesStore {
    @observable messages = [];

    loadMessagesByChatId(chatId){
        if (this.messages.find((elem) => elem.chatId === chatId)) {
            console.log("Chatid " + chatId + " already loaded! need to resolve only inreaded messages");
        } else {
            this.getAllMessagesByChatId(chatId)
        }
    }

    addMessageToEnd(message){
        //TODO for websocket push
    }

    async getAllMessagesByChatId(chatId, chat_type) {
        try {
            const response = await fetch(BACKEND_URL + `/message/chat/${chatId}/user/0`, {
                method: 'GET',
                headers: {
                    'Authorization': accountStore.token,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                alert("fetch messages failed")
            }
            const messages = await response.json();
            runInAction("getAllMessagesById", () => {
                let chatMessages = {
                    chatId:chatId,
                    chat_type:chat_type,
                    messages:messages
                };
                this.messages.push(chatMessages);
                //this.messages = messages;
            })
        } catch (err) {
            console.log(err);
            // return dispatch(setChatList(err))
        }
    }


    async postMessage(message, toId) {
        try {
            const response = await fetch(BACKEND_URL + "/message/post", {
                method: 'POST',
                headers: {
                    'Authorization': accountStore.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": toId,
                    "type": "user",
                    "message": message
                })
            });
            if (!response.ok) {
                alert("post message failed")
            }
            //const content = await response.json();
            //console.log(content);
            // return dispatch(sendMessage({
            //     message: message,
            //     status: 'ok'
            //  }));
            // runInAction("postMessage", () => {
            //
            // })

        } catch (err) {
            console.log(err);
            // return dispatch(setChatList(err))
        }
    }

    async deliveryMessage(messageId, chatId, chatType) {
        try {
            const response = await fetch(BACKEND_URL + "/message/delivery", {
                method: 'POST',
                headers: {
                    'Authorization': accountStore.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": messageId,
                    "chat_id": chatId,
                    "chat_type": 'user'
                })
            });
            if (!response.ok) {
                console.log("mark delivered message failed")
            }
            //const content = await response.json();
            //console.log(content);
            // return dispatch(sendMessage({
            //     message: message,
            //     status: 'ok'
            //  }));
            // runInAction("postMessage", () => {
            //
            // })

        } catch (err) {
            console.log(err);
            // return dispatch(setChatList(err))
        }
    }

    async readMessage(messageId, chatId, chatType) {
        try {
            const response = await fetch(BACKEND_URL + "/message/read", {
                method: 'POST',
                headers: {
                    'Authorization': accountStore.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": messageId,
                    "chat_id": chatId,
                    "chat_type": 'user'
                })
            });
            if (!response.ok) {
                console.log("mark delivered message failed")
            }
            //const content = await response.json();
            //console.log(content);
            // return dispatch(sendMessage({
            //     message: message,
            //     status: 'ok'
            //  }));
            // runInAction("postMessage", () => {
            //
            // })

        } catch (err) {
            console.log(err);
            // return dispatch(setChatList(err))
        }
    }
}

export default new MessagesStore();


//
//
// export function markAsRead(messageId, chatId) {
//     return async function (dispatch) {
//         try {
//             const response = await fetch(api + `/message/read`, {
//                 method: 'POST',
//                 headers: {
//                     'Authorization': loginService.getToken(),
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     "id": messageId,
//                     "chat_id": chatId,
//                     "chat_type": "user"
//                 })
//             });
//             if (!response.ok) {
//                 alert("mark as read failed")
//             }
//             return dispatch(markAsReadAction(
//                 messageId, chatId
//             ));
//
//         } catch (err) {
//             console.log(err);
//             // return dispatch(setChatList(err))
//         }
//     }
// }
//
