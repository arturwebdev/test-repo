import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchingUsers = createAsyncThunk(
    'users/fetchingUsers',
    async function () {
        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users')
        const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=500')
        
        const usersData = await usersResponse.data
        const postsData = await postsResponse.data

        const data = usersData.map(user => (
            {
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                password: user.website.slice(0, user.website.indexOf('.')),
                posts: postsData.filter(post => post.albumId === user.id)
            }
        ))

        return data
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        errors: false,
        currentUser: null,
        data: [],
        isFetched: false
    },
    reducers: {
        logIn: (state, { payload }) => {
            return {
                ...state,
                currentUser: {
                    ...state.data.filter(user => (payload.username === user.username || payload.username === user.email) && payload.password === user.password)[0]
                }
            }
        },
        addPosts: (state, { payload }) => {
            return {
                ...state,
                data: [
                    ...state.data.map(user => {
                        if(user.id === state.currentUser.id) {
                            return {
                                ...user,
                                posts: [
                                    {
                                        id: payload.id,
                                        url: payload.img
                                    },
                                    ...user.posts
                                ]
                            }
                        }

                        return user
                    })
                ],
                currentUser: {
                    ...state.currentUser,
                    posts: [
                        {
                            id: new Date().getTime().toString(),
                            url: payload.img
                        },
                        ...state.currentUser.posts
                    ]
                }
            }
        },
        deletePosts: (state, {payload}) => {
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    posts: [...state.currentUser.posts.filter(post => post.id !== payload.id)]
                },
                data: [
                    ...state.data.map(user => {
                        return {
                            ...user,
                            posts: [...user.posts.filter(post => post.id !== payload.id)]
                        }
                    })
                ]
            }
        }
    },
    extraReducers: {
        [fetchingUsers.pending]: state => {
            return {
                ...state,
                loading: true
            }
        },
        [fetchingUsers.fulfilled]: (state, action) => {
            return {
                ...state,
                data: [...action.payload],
                isFetched: true
            }
        },
        [fetchingUsers.rejected]: state => {
            return {
                ...state,
                error: true
            }
        }
    }
})

export const { logIn, addPosts, deletePosts } = usersSlice.actions

export const selectUsers = state => state.users 

export const usersReducer = usersSlice.reducer