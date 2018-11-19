import {SEND_MESSAGE} from "../actions/messageActions";
import {ADD_MESSAGE} from "../actions/messageActions";

const initialStore = {
};

export default function messages(state = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                ...action
            };
        default:
            return state;
    }
}