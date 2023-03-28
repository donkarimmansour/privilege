import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, deleteApi, getApi, seenApi, countApi  } from "../../api/notifications";


const getNotifications =  createAsyncThunk("notifications/get" , async (args , NotificationsApi) => {
    const { rejectWithValue , getState } = NotificationsApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const getSingleNotification =  createAsyncThunk("notifications/getSingle" , async (args , NotificationsApi) => {
    const { rejectWithValue , getState } = NotificationsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg[0]
        
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const countNotifications =  createAsyncThunk("notifications/count" , async (args , NotificationsApi) => {
    const { rejectWithValue , getState } = NotificationsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countApi(args, authorization )
        return res.data.msg
        
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const createNotifications =  createAsyncThunk("notifications/create" , async (args , NotificationsApi) => {
    const { rejectWithValue , getState } = NotificationsApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await createApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})



const seenNotification =  createAsyncThunk("notifications/seen" , async (args , NotificationsApi) => {
    const { rejectWithValue , getState } = NotificationsApi
    const { token } = getState().auth
    const { _id } = getState().notifications.singleNotification
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await seenApi(_id, args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const deleteNotification =  createAsyncThunk("notifications/delete" , async (args , NotificationsApi) => {
    const { rejectWithValue , getState } = NotificationsApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try { 
        const res = await deleteApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})



export { getNotifications , createNotifications, getSingleNotification, seenNotification, deleteNotification, countNotifications} 