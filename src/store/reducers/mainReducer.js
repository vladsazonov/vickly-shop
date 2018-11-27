import {SET_CHAT_LIST} from "../actions/mainActions";
import {UPDATE_LAST_MESSAGE} from "../actions/messageActions";
import loginService from "../../services/loginService";

const initialStore = {
    status: false
};

function getId(id, arr) {
    if (arr[0] == id) {
        return arr[1];
    } else {
        return arr[0];
    }
}

function findLastByUserId(id, state) {
    let user = null;
    state.with_group.find((elem) => {
        let lol = elem.users.map((elem) => {
            if(elem.id == id){
                user = elem;
            }
            return elem;
        });
        return false;
    });
    return user;
}

export default function chats(state = initialStore, action) {
    switch (action.type) {
        case SET_CHAT_LIST:
            return {
                ...state,
                ...action
            };
        case "USER_LOGOUT":
            return initialStore;
        case "UPDATE_LAST_MESSAGE":
            const myId = loginService.getCreds().myUserId;
            const myChat = action.message.chat.user_ids.some((elem) => elem == myId);
            const chatId = myId == action.message.from ? getId(myId, action.message.chat.user_ids) : action.message.from;
            let stateCopy = JSON.parse(JSON.stringify(state));//Object.assign({},state); // DEEP COPY WTF!?
            let user = findLastByUserId(chatId, state);
            if (user) {
                user.last = action.message;
                return stateCopy;
            } else {
                return state;
            }

        default:
            return state;
    }
}