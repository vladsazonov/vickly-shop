import loginService from "../../services/loginService"
import {setChatList} from "./mainActions";
import {BACKEND_URL} from "../../common";

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const FETCH_ALL_MESSAGES = 'FETCH_ALL_MESSAGES';
export const ADD_MESSAGE = "ADD_MESSAGE";
export const MARK_AS_READ = 'MARK_AS_READ';
export const UPDATE_LAST_MESSAGE = "UPDATE_LAST_MESSAGE";


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
            const response = await fetch(api + `/message/chat/${chatId}/user/0`, {
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

export function markAsRead(messageId, chatId) {
    return async function (dispatch) {
        try {
            const response = await fetch(api + `/message/read`, {
                method: 'POST',
                headers: {
                    'Authorization': loginService.getToken(),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": messageId,
                    "chat_id": chatId,
                    "chat_type": "user"
                })
            });
            if (!response.ok) {
                alert("mark as read failed")
            }
            return dispatch(markAsReadAction(
                messageId, chatId
            ));

        } catch (err) {
            console.log(err);
            // return dispatch(setChatList(err))
        }
    }
}

export function addMessage(message) {
    return async function (dispatch) {
        return dispatch(addMessageAction(
            message
        ));
    }
}

export function addLastMessageToUser(message) {
    return async function (dispatch) {
        return dispatch(updateLastMessage(
            message
        ));
    }
}

export function updateLastMessage(message) {
    return {
        type: UPDATE_LAST_MESSAGE,
        message
    };
}

export function markAsReadAction(messageId, chatId) {
    return {
        type: MARK_AS_READ,
        messageId,
        chatId
    };
}

export function sendMessage(message) {
    return {
        type: SEND_MESSAGE,
        ...message
    };
}

export function addMessageAction(message) {
    return {
        type: ADD_MESSAGE,
        message
    };
}


export function fetchAllMessages(messages) {
    return {
        type: FETCH_ALL_MESSAGES,
        ...messages
    };
}


