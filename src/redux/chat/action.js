import { createAsyncThunk } from "@reduxjs/toolkit";
import {  getMessageApi , getOnlineApi , ImageMessageSendApi , messageSendApi } from "../../api/chat";

const sendChatImgMessage =  createAsyncThunk("chat/create" , async (args , ChatApi) => {
    const { rejectWithValue , getState } = ChatApi
    const { token } = getState().auth

    try {
     const res = await  ImageMessageSendApi(args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})
 
const sendChatMessage =  createAsyncThunk("chat/create" , async (args , ChatApi) => {
    const { rejectWithValue , getState } = ChatApi
    const { token } = getState().auth

    try {
     const res = await  messageSendApi(args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})



const getChatMessage =  createAsyncThunk("chat/get" , async (args , ChatApi) => {
    const { rejectWithValue , getState } = ChatApi
    const { token } = getState().auth

    try {
     const res = await  getMessageApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const getChatOnline =  createAsyncThunk("chat/online" , async (args , ChatApi) => {
    const { rejectWithValue , getState } = ChatApi
    const { token } = getState().auth

    try {
     const res = await  getOnlineApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})



export {getChatOnline , getChatMessage , sendChatImgMessage , sendChatMessage } 