import {observable, reaction, runInAction} from "mobx";
import {BACKEND_URL} from "../common";
import accountStore from "./AccountStore";

class SaleIncomesStore {
    @observable saleLots = [];
    @observable fetchFail = false;
    err_message = "";

    async fetchSalesIncomes() {
        try {
            const lotsListResponse = await fetch(BACKEND_URL + "/sales/list", {
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
                this.saleLots = content;
            });
        } catch (err) {
            console.log(err);
            runInAction("Failed fetch users info", () => {
                this.fetchFail = true;
                this.err_message = err;
            });
        }
    }

    async confirmSaleIncomeStatus(isSuccess) {
        try {
            const response = await fetch(BACKEND_URL + `/sale/${"ID"}/status`, {
                method: 'POST',
                headers: {
                    'Authorization': accountStore.token,
                }
            });
            if (!response.ok) {
                alert("fetch chats failed");
                runInAction("Failed fetch users info", () => {
                    this.fetchFail = true;
                    this.err_message = response.error();
                });
            }
            const content = await response.json();
            runInAction("Update users info", () => {
                this.games = content;
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

const store = new SaleIncomesStore();

export default store;
