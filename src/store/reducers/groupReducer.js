import {GET_ALL_GROUPS} from "../actions/groupsActions";

const initialStore = {
};

export default function groups(state = initialStore, action) {
    switch (action.type) {
        case GET_ALL_GROUPS:
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