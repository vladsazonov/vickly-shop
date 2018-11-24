import {ADD_MESSAGE, SEND_MESSAGE} from "../actions/messageActions";
import {FETCH_ALL_MESSAGES} from "../actions/messageActions";
import loginService from "../../services/loginService";

const initialStore = {
};

function getId(id,arr) {
    if(arr[0] == id){
        return arr[1];
    }else {
        return arr[0];
    }
}

export default function messages(state = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                ...action
            };
        case FETCH_ALL_MESSAGES:
            return {
                ...state,
                ...action
            };
        case "USER_LOGOUT":
            return initialStore;
        case ADD_MESSAGE:
            const myId = loginService.getCreds().myUserId;
            const myChat = action.message.chat.user_ids.some((elem) => elem == myId);
            const chatId = myId == action.message.from ? getId(myId, action.message.chat.user_ids) : action.message.from;
            if(myChat && state[chatId]){
                const id = action.message.from;
                let stateCopy = JSON.parse(JSON.stringify(state));//Object.assign({},state); // DEEP COPY WTF!?
                stateCopy[chatId].push(action.message);
                return {
                    ...stateCopy
                }
            }
            return {
                ...state
            };
        default:
            return state;
    }
}