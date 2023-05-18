import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IChat} from "../interface/IMessage";
import axios from "axios";


export const chatsAPI = createApi({
    reducerPath: 'chatsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://green-api.com/docs/api/receiving/technology-http-api/'}),
    tagTypes: ['Chat'],
    endpoints: (build) => ({
        fetchAllChats: build.query<IChat[], number>({
            query: (limit: number = 5) => ({
                url: `/chat.get`,
                params: {
                    limit: limit
                }
            }),
            providesTags: result => ['Chat']
        }),
    })
})

// export default class PostService {
//     static async getAll(limit = 10, page = 1) {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
//             params: {
//                 _limit: limit,
//                 _page: page
//             }
//         })
//         return response;
//     }
//     static async getById(id: number) {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
//         return response;
//     }
//     static async getCommentsByPostId(id: number) {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
//         return response;
//     }
// }