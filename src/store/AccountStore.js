import {computed, observable, action, runInAction} from "mobx";
import {BACKEND_URL} from "../common";
import IncomesStore from "./IncomesStore"
import WebSocketService from "../services/websocketService";

class AccountStore {
    @observable name = "";
    @observable token = "";
    @observable login = "";
    isAdmin = null;
    @observable status = "unauthed";
    userId = null;
    err_message = "";

    constructor() {
        this.name = sessionStorage.getItem("name");
        this.token = sessionStorage.getItem("token");
        this.isAdmin = sessionStorage.getItem("isAdmin") === "true";
        this.login = sessionStorage.getItem("login");
        if (this.token) {
            this.status = "authed";
        }
        //TODO LATER
        // if(this.token)
        //     WebSocketService.run(this.token)
    }

    async loginUser(login, password) {
        try {
            const response = await fetch(BACKEND_URL + "/user/login", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "login": login,
                    "pass": password
                })
            });
            if (!response.ok) {
                runInAction("Auth failed", () => {
                    this.status = "failed";
                    this.err_message = response.error();
                });
            }
            const content = await response.json();

            runInAction("Auth success", () => {
                this.name = content.name;
                this.token = content.token;
                this.login = login;
                this.status = "authed";
                this.isAdmin = content.is_admin;
                if (this.isAdmin)
                    IncomesStore.fetchLots();
                this.saveInLocalStorage(this.name, this.token,this.login,this.isAdmin);
            });
            //TODO LATER
            // WebSocketService.run(this.token)
        } catch (err) {
            console.log(err);
            runInAction("Auth failed", () => {
                this.status = "failed";
                this.err_message = err;
            });
        }
    };

    saveInLocalStorage(name, token, login, isAdmin) {
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("login", login);
        sessionStorage.setItem("isAdmin",isAdmin);
    }

    @action
    unauth() {
        this.name = null;
        this.token = null;
        this.login = null;
        this.isAdmin = null;
        this.status = "unauthed";
        sessionStorage.clear();
    }
}

export let lol = 5;

export default new AccountStore();

