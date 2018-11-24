import loginService from "../../services/loginService"
import {BACKEND_URL} from "../../common";

export const LOGIN_STATUS = 'SET_LOGIN_STATUS';
const api = "http://" + BACKEND_URL + "/api";


export function tryLogin(login, password) {
    return async function (dispatch) {
        try {
            const response = await fetch(api + "/user/login", {
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
                return dispatch(setLoginStatus({
                    status: false,
                    error: response.error()

                }));
            }
            const content = await response.json();
            let creds = {
                first_name: content.first_name,
                last_name: content.last_name,
                token: content.token,
            };
            loginService.saveCreds(content);
            return dispatch(setLoginStatus({
                ...content,
                status: true

            }));

        } catch (err) {
            console.log(err);
            return dispatch(setLoginStatus(
                {
                    status: false,
                    error: err

                }
            ))
        }
    }
}

const USER_LOGOUT = "USER_LOGOUT";

export function userLogout() {
    return {
        type:USER_LOGOUT
    }
}

export function setLoginStatus(user) {
    return {
        type: LOGIN_STATUS,
        ...user
    };
}


