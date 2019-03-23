import {observable, reaction, runInAction} from "mobx";
import {BACKEND_URL} from "../common";
import accountStore from "./AccountStore";

class LotsStore {
    @observable lots = [];
    @observable fetchFail = false;
    err_message = "";

    async fetchLots() {
        try {
            const lotsListResponse = await fetch(BACKEND_URL + "/lot/list", {
                method: 'GET',
                headers: {
                    'Authorization': accountStore.token,
                }
            });
            if (!lotsListResponse.ok) {
                alert("fetch chats failed");
                runInAction("Failed fetch users info", () => {
                    this.fetchFail = true;
                    this.err_message = lotsListResponse.error();
                });
            }
            const content = await lotsListResponse.json();
            runInAction("Update users info", () => {
                this.lots = content;
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

const store = new LotsStore();

export default store;
