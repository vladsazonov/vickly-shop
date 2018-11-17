import { combineReducers } from 'redux';
import user from "./loginReducer"
import button from "./buttonReducer"
import chats from "./mainReducer";

export default combineReducers({
    user,
    button,
    chats
});