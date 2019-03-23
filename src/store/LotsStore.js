import {observable, reaction, runInAction} from "mobx";
import {BACKEND_URL} from "../common";
import accountStore from "./AccountStore";

class LotsStore {
    @observable lots = [];
    @observable games = [];
    @observable fetchFail = false;
    lotsFetched=false;
    gamesFetched=false;
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
                this.lots = content.goods;
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

    async fetchGames() {
        try {
            const gameListResponse = await fetch(BACKEND_URL + "/game", {
                method: 'GET',
                headers: {
                    'Authorization': accountStore.token,
                }
            });
            if (!gameListResponse.ok) {
                alert("games failed");
                runInAction("games fetch info", () => {
                    this.fetchFail = true;
                    this.err_message = gameListResponse.error();
                });
            }
            const content = await gameListResponse.json();
            runInAction("Update users info", () => {
                this.games = content.games;
                this.gamesFetched = true;
            });
        } catch (err) {
            console.log(err);
            runInAction("Failed fetch users info", () => {
                this.fetchFail = true;
                this.err_message = err;
            });
        }
    }

    async postLot(summary, text, price, type) {
        try {
            const gameListResponse = await fetch(BACKEND_URL + "/goods", {
                method: 'POST',
                headers: {
                    'Authorization': accountStore.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    summary: summary,
                    text: text,
                    price: price,
                    typed: type,
                    status: 0
                })
            });
            if (!gameListResponse.ok) {
                alert("add lot failed");
                runInAction("add lot", () => {
                    this.fetchFail = true;
                    this.err_message = gameListResponse.error();
                });
            }
            // NO CONTENT
            // const content = await gameListResponse.json();
            // runInAction("Update users info", () => {
            //     this.games = content;
            // });
        } catch (err) {
            console.log(err);
            runInAction("Failed fetch users info", () => {
                this.fetchFail = true;
                this.err_message = err;
            });
        }
    }

    async postBuy(lotId) {
        try {
            const gameListResponse = await fetch(BACKEND_URL + "/wantbuy", {
                method: 'POST',
                headers: {
                    'Authorization': accountStore.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    lotId:lotId
                })
            });
            if (!gameListResponse.ok) {
                alert("add lot failed");
                runInAction("add lot", () => {
                    this.fetchFail = true;
                    this.err_message = gameListResponse.error();
                });
            }
            // NO CONTENT
            // const content = await gameListResponse.json();
            // runInAction("Update users info", () => {
            //     this.games = content;
            // });
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
