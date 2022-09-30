import { createAsyncThunk } from "@reduxjs/toolkit";
import { forgotPasswordApi, resetPasswordApi, signinUserApi, signupUserApi } from "../../api/auth";

const signinUser =  createAsyncThunk("auth/signinUser" , async (args , AuthApi) => {
    const { rejectWithValue } = AuthApi

    try {
     const res = await  signinUserApi(args)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})


const signupUser =  createAsyncThunk("auth/signupUser" , async (args , AuthApi) => {
    const { rejectWithValue } = AuthApi

    try {
     const res = await  signupUserApi(args)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const forgotPassword =  createAsyncThunk("auth/forgotPassword" , async (args , AuthApi) => {
    const { rejectWithValue } = AuthApi

    try {
     const res = await  forgotPasswordApi(args)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const resetPassword =  createAsyncThunk("auth/resetPassword" , async (args , AuthApi) => {
    const { rejectWithValue , getState } = AuthApi
    const { token } = getState().auth

    try {
     const res = await  resetPasswordApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

export {signupUser , signinUser , resetPassword , forgotPassword} 