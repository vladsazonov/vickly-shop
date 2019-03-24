import {observable, reaction, runInAction} from "mobx";
import {BACKEND_URL} from "../common";
import accountStore from "./AccountStore";

class IncomesStore {
    @observable buyLots = [];
    @observable saleLots = [];
    @observable fetchFail = false;
    lotsFetched = false;
    err_message = "";

    async fetchLots() {
        try {
            const lotsListResponse = await fetch(BACKEND_URL + "/goods ", {
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
                let lots = content.goods;
                this.saleLots = lots.filter(elem => elem.status === 0);
                this.buyLots = lots.filter(elem => elem.status === 5);
                this.lotsFetched = true;
            });
        } catch (err) {
            console.log(err);
            runInAction("Failed fetch users info", () => {
                this.fetchFail = true;
                this.err_message = err;
            });
        }
    }

    async confirmBuyIncomeStatus(isSuccess, id) {
        try {
            const response = await fetch(BACKEND_URL + `/goods`, {
                method: 'PATCH',
                headers: {
                    'Authorization': accountStore.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status:isSuccess ? 1 : 2,
                    id:id
                })
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

    async confirmBuyTransmissionIncomeStatus(isSuccess, id) {
        try {
            const response = await fetch(BACKEND_URL + `/goods`, {
                method: 'PATCH',
                headers: {
                    'Authorization': accountStore.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status:isSuccess ? 3 : 4,
                    id:id
                })
            });
            if (!response.ok) {
                alert("confirmBuyTransmissionIncomeStatus failed");
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

    async confirmSaleIncomeStatus(id) {
        try {
            const response = await fetch(BACKEND_URL + `/goods`, {
                method: 'PATCH',
                headers: {
                    'Authorization': accountStore.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status:6,
                    id:id
                })
            });
            if (!response.ok) {
                alert("confirmSaleIncomeStatus");
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

    async confirmSaleTransmissionIncomeStatus(isSuccess, id) {
        try {
            const response = await fetch(BACKEND_URL + `/goods`, {
                method: 'PATCH',
                headers: {
                    'Authorization': accountStore.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status:isSuccess ? 7 : 8,
                    id:id
                })
            });
            if (!response.ok) {
                alert("confirmSaleTransmissionIncomeStatus failed");
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

const store = new IncomesStore();

export default store;
