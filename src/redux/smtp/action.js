import { createAsyncThunk } from "@reduxjs/toolkit";
import { editApi  , getApi  } from "../../api/smtp";

const editSmtp =  createAsyncThunk("smtp/edit" , async (args , SmtpApi) => {
    const { rejectWithValue } = SmtpApi

    try {
     const res = await  editApi(args)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})


const getSmtp =  createAsyncThunk("smtp/get" , async (args , SmtpApi) => {
    const { rejectWithValue , getState } = SmtpApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})



export { getSmtp , editSmtp} 