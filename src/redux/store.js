import {combineReducers} from "redux";
import {messageReducer} from "./redusers/messageReducer";
import {usersReducer} from "./redusers/usersReducer";

export const rootReducer = combineReducers({
    message: messageReducer,
    users: usersReducer


})