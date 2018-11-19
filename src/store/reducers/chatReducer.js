import {SET_CURRENT_CHAT} from "../actions/chatActions";

const initialStore = {
    userId:null
};

export default function currentChat(state = initialStore, action) {
    switch (action.type) {
        case SET_CURRENT_CHAT:
            return {
                ...state,
                ...action
            };
        default:
            return state;
    }
}