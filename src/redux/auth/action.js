import { createAsyncThunk } from "@reduxjs/toolkit";
import { forgotPasswordApi, signinUserApi , getMeApi } from "../../api/auth";

const signinUser =  createAsyncThunk("auth/signin" , async (args , AuthApi) => {
    const { rejectWithValue , dispatch } = AuthApi

    try {
        const res = await signinUserApi(args)

        dispatch(getMe(res.data.msg))

       // return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const forgotPassword =  createAsyncThunk("auth/forgotPassword" , async (args , AuthApi) => {
    const { rejectWithValue } = AuthApi
    try {
        const res = await forgotPasswordApi(args)
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const getMe =  createAsyncThunk("auth/me" , async (args , AuthApi) => {
    const { rejectWithValue } = AuthApi

    const authorization = { "Authorization": `bearer ${args.TOKEN}` }

    try {
        const res = await getMeApi(authorization)

        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


export { signinUser , forgotPassword , getMe} 