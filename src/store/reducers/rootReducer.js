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