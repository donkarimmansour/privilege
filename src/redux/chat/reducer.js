import { createSlice } from "@reduxjs/toolkit";
import {getChatOnline , getChatMessage , sendChatImgMessage , sendChatMessage }  from "./action"
const initialState = {
    messages : [],
    online : [], 
    loading: false,
    error: false,
    success: false,
}


export const ChatReducerSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        // create: (state, action) => {

        // },
        // delete: (state, action) => {

        // },
        // edit: (state, action) => {

        // },
        // count: (state, action) => {

        // },
        // get: (state, action) => {

        // },
        // getSingle: (state, action) => {

        // },
    },
    extraReducers: {
        //getChatMessage
        [getChatMessage.pending]: (state, action) => {
            state.loading = true
        },

        [getChatMessage.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.messages = action.payload
        },

        [getChatMessage.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getChatOnline
        [getChatOnline.pending]: (state, action) => {
            state.loading = true
        },

        [getChatOnline.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.online = action.payload
        },

        [getChatOnline.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //sendChatImgMessage
        [sendChatImgMessage.pending]: (state, action) => {
            state.loading = true
        },

        [sendChatImgMessage.fulfilled]: (state, action) => {
            state.loading = false
          
        },

        [sendChatImgMessage.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //sendChatMessage
        [sendChatMessage.pending]: (state, action) => {
            state.loading = true
        },

        [sendChatMessage.fulfilled]: (state, action) => {
            state.loading = false
          
        },

        [sendChatMessage.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

    }
})



export default ChatReducerSlice.reducer; 