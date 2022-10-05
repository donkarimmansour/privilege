import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi  } from "../../api/notifications";


const getNotifications =  createAsyncThunk("notifications/get" , async (args , NotificationsApi) => {
    const { rejectWithValue , getState } = NotificationsApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})


const createNotifications =  createAsyncThunk("notifications/create" , async (args , NotificationsApi) => {
    const { rejectWithValue , getState } = NotificationsApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})




export { getNotifications , createNotifications} 