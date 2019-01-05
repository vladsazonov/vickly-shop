import {computed, observable, action, runInAction} from "mobx";
import loginService from "../services/loginService";
import {setLoginStatus} from "./actions/loginActions";
import {BACKEND_URL} from "../common";

class AccountStore {
    @observable fullname = "";
    @observable token = "";
    @observable login = "";
    @observable status = "unauthed";
    err_message = "";


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
                    "password": password
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
                this.fullname.set(content.first_name + " " + content.last_name);
                this.token.set(content.token);
                this.login.set(login);
                this.status.set("authed");
            });
        } catch (err) {
            console.log(err);
            runInAction("Auth failed", () => {
                this.status = "failed";
                this.err_message = err;
            });
        }
    };

    @action
    unauth() {
        this.fullname.set(null);
        this.token.set(null);
        this.login.set(null);
        this.status.set("unauthed");
    }
}

const store = new AccountStore();

export default store;