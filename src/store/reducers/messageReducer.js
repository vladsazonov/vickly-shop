import {SEND_MESSAGE} from "../actions/messageActions";
import {FETCH_ALL_MESSAGES} from "../actions/messageActions";

const initialStore = {
};

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
        default:
            return state;
    }
}