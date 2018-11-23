import {CREATE_INVITE, SIGNUP_INVITE} from "../actions/inviteActions";

const initialStore = {
    inviteCreated:false,
    uuid:null
};

export default function user(state = initialStore, action) {
    switch (action.type) {
        case CREATE_INVITE:
        case SIGNUP_INVITE:
            return {
                ...state,
                ...action
            };

        default:
            return state;
    }
}