import loginService from "../../services/loginService"
import {setChatList} from "./mainActions";
import {BACKEND_URL} from "../../common";

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const FETCH_ALL_MESSAGES = 'FETCH_ALL_MESSAGES';
export const ADD_MESSAGE = "ADD_MESSAGE";


const api = "http://" + BACKEND_URL + "/api";


export function postMessage(message, toId) {
    return async function (dispatch) {
        try {
            const response = await fetch(api + "/message/post", {
                method: 'POST',
                headers: {
                    'Authorization': loginService.getToken(),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": toId,
                    "type": "user",
                    "message": message
                })
            });
            if (!response.ok) {
                alert("fetch chats failed")
            }
            const content = await response.json();
            return dispatch(sendMessage({
                message: message,
                status: 'ok'
            }));

        } catch (err) {
            console.log(err);
            // return dispatch(setChatList(err))
        }
    }
}

export function getAllMessages(chatId) {
    return async function (dispatch) {
        try {
            const response = await fetch(api + `/message/chat/${chatId}/user`, {
                method: 'GET',
                headers: {
                    'Authorization': loginService.getToken(),
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                alert("fetch messages failed")
            }
            const content = await response.json();
            let obj = {};
            obj[chatId] = content;
            return dispatch(fetchAllMessages({
                ...obj
            }));

        } catch (err) {
            console.log(err);
            // return dispatch(setChatList(err))
        }
    }
}

export function sendMessage(message) {
    return {
        type: SEND_MESSAGE,
        ...message
    };
}



export function fetchAllMessages(messages) {
    return {
        type: FETCH_ALL_MESSAGES,
        ...messages
    };
}


