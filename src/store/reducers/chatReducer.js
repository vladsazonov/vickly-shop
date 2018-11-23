import {SET_CURRENT_CHAT} from "../actions/chatActions";

const initialStore = {
    userId:null,
    prevUserId:null
};

export default function currentChat(state = initialStore, action) {
    switch (action.type) {
        case SET_CURRENT_CHAT:
            return {
                ...state,
                prevUserId:state.userId,
                ...action
            };
        default:
            return state;
    }
}