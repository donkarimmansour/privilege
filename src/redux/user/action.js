import { createAsyncThunk } from "@reduxjs/toolkit";
import { editApi  , getApi  } from "../../api/user";

const editProfile =  createAsyncThunk("profile/edit" , async (args , ProfileApi) => {
    const { rejectWithValue } = ProfileApi

    try {
     const res = await  editApi(args)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})


const getProfile =  createAsyncThunk("profile/get" , async (args , ProfileApi) => {
    const { rejectWithValue , getState } = ProfileApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})



export { getProfile , editProfile} 