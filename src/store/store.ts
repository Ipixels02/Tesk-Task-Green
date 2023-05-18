import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import {chatsAPI} from "../api/ChatServies";

const rootReducer = combineReducers({
    userReducer,
    [chatsAPI.reducerPath]: chatsAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(chatsAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

