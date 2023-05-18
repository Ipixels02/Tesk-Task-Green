import axios from "axios";
import {IChat} from "../../interface/IMessage";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get<IChat[]>('https://jsonplaceholder.typicode.com/users')
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)