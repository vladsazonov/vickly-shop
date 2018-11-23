import loginService from "../../services/loginService";
import {BACKEND_URL} from "../../common";


export const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT';
const api = "http://"+BACKEND_URL+"/api";


export function setCurrentChat(userId, user) {
    return {
        type: SET_CURRENT_CHAT,
        userId,
        info:user
    };
}


