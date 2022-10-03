import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi  , getApi  } from "../../api/exam";

const createExam =  createAsyncThunk("exam/create" , async (args , examApi) => {
    const { rejectWithValue } = examApi

    try {
     const res = await  createApi(args)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})


const getExam =  createAsyncThunk("exam/get" , async (args , examApi) => {
    const { rejectWithValue , getState } = examApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})



export { getExam , createExam} 