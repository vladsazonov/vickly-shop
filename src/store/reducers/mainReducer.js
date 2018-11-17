import {SET_CHAT_LIST} from "../actions/mainActions";

const initialStore = {
    status:false
};

export default function chats(state = initialStore, action) {
    switch (action.type) {
        case SET_CHAT_LIST:
            return {
                ...state,
                ...action
            };
        default:
            return state;
    }
}