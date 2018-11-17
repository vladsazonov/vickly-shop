import {BUTTON_ACTION} from "../actions/buttonAction"

const initialStore = {
    color:"#EEEEEE"
};

export default function button(state = initialStore, action) {
    switch (action.type) {
        case BUTTON_ACTION:
            return {
                ...state,
                ...action
            };
        default:
            return state;
    }
}