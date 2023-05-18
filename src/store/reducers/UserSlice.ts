import {IChat} from "../../interface/IMessage";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";

interface ChatState {
    chats: IChat[];
    isLoading: boolean;
    error: string;
}

const initialState: ChatState = {
    chats: [],
    isLoading: false,
    error: ''
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IChat[]>) => {
            state.isLoading = false;
            state.error = ''
            state.chats = action.payload;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default chatSlice.reducer;