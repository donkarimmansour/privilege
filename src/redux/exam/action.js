import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi  , getApi  } from "../../api/exam";

const createExam =  createAsyncThunk("smtp/edit" , async (args , examApi) => {
    const { rejectWithValue, getState  } = examApi
    const { token , user } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
     const res = await  createApi({exam : [...args.exam] , rate : args.rate , studentID : user._id} , authorization)
     return res.data.msg
     
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    } 
})


const getExam =  createAsyncThunk("smtp/get" , async (args , examApi) => {
    const { rejectWithValue, getState  } = examApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
     const res = await  getApi(args , authorization)
     return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    } 
})


export { getExam , createExam} 