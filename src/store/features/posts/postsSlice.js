import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

export const fetchingPosts = createAsyncThunk(
    'posts/fetchingPosts',
    async function () {
        const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const imagesResponse = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100')
        const commentsResponse = await axios.get('https://jsonplaceholder.typicode.com/comments')

        const postsData = await postsResponse.data
        const imagesData = await imagesResponse.data
        const commentsData = await commentsResponse.data

        const data = postsData.map(el => (
            {
                id: el.id,
                username: el.title.split(' ').join('').slice(0, 7),
                about: el.body,
                img: imagesData.filter(image => image.id === el.id)[0].url,
                comments: commentsData.filter(comment => comment.postId === el.id).map(postComment => (
                    {
                        id: postComment.id,
                        username: postComment.name.split(' ').join('').slice(0, 7),
                        comment: postComment.body, 
                    }
                ))
            }
        ))

        return data
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        loading: false,
        error: false,
        data: [],
        initialData: [],
        isFetched: false
    },
    reducers: {
        searchUserPosts: (state, { payload }) => {
            return {
                ...state,
                initialData: [...state.data.filter(post => post.username.toLowerCase().startsWith(payload.text.toLowerCase()))]
            }
        },
        addPostsInGeneralPage: (state, { payload }) => {
            return {
                ...state,
                data: [
                    {
                        id: payload.id,
                        username: payload.username,
                        about: payload.description,
                        img: payload.url,
                        comments: []
                    },
                    ...state.data
                ],
                initialData: [
                    {
                        id: new Date().getTime().toString(),
                        username: payload.username,
                        about: payload.description,
                        img: payload.url,
                        comments: []
                    },
                    ...state.initialData
                ]
            }
        },
        deletePostsInGeneralPage: (state, { payload }) => {
            return {
                ...state,
                data: [...state.data.filter(post => post.img !== payload.img)],
                initialData: [...state.initialData.filter(post => post.img !== payload.img)]
            }
        },
        addComments: (state, { payload }) => {
            return {
                ...state,
                data: state.data.map(post => {
                    if(post.id === payload.id) {
                        return {
                            ...post,
                            comments: [
                                ...post.comments,
                                {
                                    id: new Date().getTime().toString(),
                                    username: 'user',
                                    comment: payload.comment,
                                }
                                
                            ]
                        }
                    }

                    return post
                }),
                initialData: state.initialData.map(post => {
                    if(post.id === payload.id) {
                        return {
                            ...post,
                            comments: [
                                ...post.comments,
                                {
                                    id: new Date().getTime().toString(),
                                    username: 'user',
                                    comment: payload.comment,
                                }
                                
                            ]
                        }
                    }

                    return post
                })
            }
        },
        isInMakingCommentMode: (state, { payload }) => {
            return {
                ...state,
                data: state.data.map(post => {
                    if(post.id === payload.id) {
                        return {
                            ...post,
                            comments: post.comments.map(comment => (
                                {
                                    ...comment,
                                    isMakingAComment: payload.isActive
                                }
                            ))         
                        }
                    }

                    return post
                }),
                initialData: state.initialData.map(post => {
                    if(post.id === payload.id) {
                        return {
                            ...post,
                            comments: post.comments.map(comment => (
                                {
                                    ...comment,
                                    isMakingAComment: payload.isActive
                                }
                            ))         
                        }
                    }

                    return post
                })
            }
        },
    },
    extraReducers: {
        [fetchingPosts.pending]: state => {
            return {
                ...state,
                loading: true
            }
        },
        [fetchingPosts.fulfilled]: (state, action) => {
            return {
                ...state,
                data: [...state.data, ...action.payload],
                initialData: [...state.initialData, ...action.payload],
                isFetched: true
            }
        },
        [fetchingPosts.rejected]: state => {
            return {
                ...state,
                error: true
            }
        }
    }
})

export const {addPostsInGeneralPage, deletePostsInGeneralPage, addComments, isInMakingCommentMode, shouldShowComments, searchUserPosts } = postsSlice.actions

export const postsReducer = postsSlice.reducer

export const selectPosts = state => state.posts
