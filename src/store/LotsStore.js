import {observable, reaction, runInAction} from "mobx";
import {BACKEND_URL} from "../common";
import accountStore from "./AccountStore";

class LotsStore {
    @observable lots = [];
    @observable games = [];
    gamesOptions = [];
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
                this.lots = content.goods.filter(elem=>elem.status===3);
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
                this.gamesOptions = this.games.map(elem => {
                    return {
                        key:elem.name,
                        text:elem.name,
                        value:elem.name
                    }
                });
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

    async postLot(name, summary, text, price, type, game) {
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
                    price: parseInt(price,10),
                    typed: type,
                    status: 0,
                    game: game,
                    name: name
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
            const gameListResponse = await fetch(BACKEND_URL + `/goods/${lotId}`, {
                method: 'GET',
                headers: {
                    'Authorization': accountStore.token,
                    'Content-Type': 'application/json'
                }
            });
            if (!gameListResponse.ok) {
                alert("buy lot failed");
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
            runInAction("buy lot failed", () => {
                this.fetchFail = true;
                this.err_message = err;
            });
        }
    }

}

const store = new LotsStore();

export default store;
