import { createAsyncThunk } from "@reduxjs/toolkit";
import { editApi  , getApi  } from "../../api/smtp";

const editSmtp =  createAsyncThunk("smtp/edit" , async (args , SmtpApi) => {
    const { rejectWithValue, getState  } = SmtpApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }
    const { _id } = getState().smtp.smtp

    try {
     const res = await  editApi(_id ,  args , authorization)
     return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    } 
})
 

const getSmtp =  createAsyncThunk("smtp/get" , async (args , SmtpApi) => {
    const { rejectWithValue, getState  } = SmtpApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
     const res = await  getApi(authorization)
     return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    } 
})



export { getSmtp , editSmtp} 