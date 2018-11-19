import loginService from "../../services/loginService"

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
const host = '192.168.0.106:9000';
const api = "http://"+host+"/api";


export function sendMessage(message) {
    return {
        type: SEND_MESSAGE,
        ...message
    };
}

export function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        ...message
    };
}


