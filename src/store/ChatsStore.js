import {observable, reaction, runInAction} from "mobx";
import {BACKEND_URL} from "../common";
import accountStore from "./AccountStore";
import messagesStore from "./MessagesStore";

class ChatsStore {
    @observable userChats = {};
    @observable groupChats = {};
    @observable fetchFail = false;
    @observable currentChatId = null;
    err_message = "";

    async fetchChats() {
        try {
            const userListResponse = await fetch(BACKEND_URL + "/user/list", {
                method: 'GET',
                headers: {
                    'Authorization': accountStore.token,
                }
            });
            // TODO fetching group chats
            // const groupChatsResponse =  await fetch(api + "/user/list", {
            //     method: 'GET',
            //     headers: {
            //         'Authorization': accountStore.getToken(),
            //     }
            // });
            if (!userListResponse.ok) {
                alert("fetch chats failed");
                runInAction("Failed fetch users info", () => {
                    this.fetchFail = true;
                    this.err_message = userListResponse.error();
                });
            }
            const content = await userListResponse.json();
            runInAction("Update users info", () => {
                this.userChats = content;
            });
        } catch (err) {
            console.log(err);
            runInAction("Failed fetch users info", () => {
                this.fetchFail = true;
                this.err_message = err;
            });
        }
    }
}

const store = new ChatsStore();

export default store;
