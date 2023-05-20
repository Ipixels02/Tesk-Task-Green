import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {authorizationReducer} from "./reducers/Authorization";
import {addContactReducer} from "./reducers/Contacts";
import {getChatHistoryReducer} from "./reducers/ChatHistory";
import {sendMessageReducer} from "./reducers/SendMessage";
import {getNotificationReducer} from "./reducers/GetNotification";
import {delNotificationReducer} from "./reducers/DelNotification";

const rootReducer = combineReducers({
    auth: authorizationReducer,
    contact: addContactReducer,
    chat: getChatHistoryReducer,
    sendMsg: sendMessageReducer,
    getNotif: getNotificationReducer,
    delNotif: delNotificationReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>

