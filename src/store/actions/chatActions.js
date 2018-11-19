import loginService from "../../services/loginService";


export const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT';
const host = '192.168.0.106:9000';
const api = "http://"+host+"/api";


export function setCurrentChat(userId) {
    return {
        type: SET_CURRENT_CHAT,
        userId
    };
}


