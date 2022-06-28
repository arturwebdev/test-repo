import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchingChat = createAsyncThunk(
    'chat/fetchingChat',
    async function () {
        const usersResponse = await axios('https://jsonplaceholder.typicode.com/posts?_limit=10')
        const imagesResponse = await axios('https://jsonplaceholder.typicode.com/photos?_limit=10')

        const usersData = await usersResponse.data
        const imagesData = await imagesResponse.data

        const data = usersData.map(e => (
            {
                id: e.id,
                username: e.title.split(' ').join('').slice(0, 7),
                img: imagesData.filter(img => img.id === e.id)[0].url,
                messages: []
            }
        ))

        return data
    }
)

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        loading: false,
        error: false,
        with: null,
        chat: [],
        isFetched: false
    },
    reducers: {
        addMessage: (state, { payload }) => {
            let selfMessage = {
                id: new Date().getTime().toString() + Math.random(),
                from: 'Self',
                text: payload.text
            }

            let remoteMessage = {
                id: new Date().getTime().toString(),
                from: 'Remote'
            }

            if (payload.text.split(' ').some(el => el.toLowerCase() === 'barev')) {
                remoteMessage.text = 'Barev'
            } else if (payload.text.split(' ').some(el => el.toLowerCase() === 'vonces')) {
                remoteMessage.text = 'lav em, du vonces'
            } else {
                remoteMessage.text = 'inch?'
            }

            return {
                ...state,
                chat: [
                    ...state.chat.map(user => {
                        if (user.id === state.with.id) {
                            return {
                                ...user,
                                messages: [
                                    ...user.messages,
                                    {...selfMessage},
                                    {...remoteMessage}
                                ]
                            }
                        }

                        return user
                    })
                ]
            }
        },
        changeWith: (state, { payload }) => {
            return {
                ...state,
                with: {...state.chat.filter(user => user.id === payload.id)[0]}  
            }
        }
    },
    extraReducers: {
        [fetchingChat.pending]: state => {
            return {
                ...state,
                loading: true
            }
        },
        [fetchingChat.fulfilled]: (state, action) => {
            return {
                ...state,
                with: {...action.payload[0]},
                chat:[...state.chat, ...action.payload],
                isFetched: true
            }
        },
        [fetchingChat.rejected]: state => {
            return {
                ...state,
                error: true
            }
        }
    }
})

export const { addMessage, changeWith } = chatSlice.actions

export const selectChat = state => state.chat

export const chatReducer = chatSlice.reducer