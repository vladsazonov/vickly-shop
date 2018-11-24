import { combineReducers } from 'redux';
import user from "./loginReducer"
import chats from "./mainReducer";
import currentChat from "./chatReducer"
import messages from "./messageReducer"

export default combineReducers({
    user,
    chats,
    currentChat,
    messages
});

const appReducer = combineReducers({
    user,
    chats,
    currentChat,
    messages
});


const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined
    }
    return appReducer(state, action);
};