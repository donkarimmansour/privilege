import { createAsyncThunk } from "@reduxjs/toolkit";
import { forgotPasswordApi, signinUserApi , getMeApi } from "../../api/auth";
import { editProfileApi as editStudentProfileApi } from "../../api/students";
import { editProfileApi as editTeacherProfileApi } from "../../api/professors";
import { editProfileApi as editAdminProfileApi } from "../../api/admin";

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



const editProfile = createAsyncThunk("auth/editprofile", async (args, AdminsApi) => {
    const { rejectWithValue, getState } = AdminsApi
    const { token } = getState().auth
    const { _id } = getState().auth.user

    const authorization = { "Authorization": `bearer ${token}` }

    try {

        let res = {}   
        
        if(args.type === "teacher"){
            res = await editTeacherProfileApi(_id, args, authorization )      
        }else if(args.type === "student"){
            res = await editStudentProfileApi(_id, args, authorization )      
        }else if(args.type === "admin"){
            res = await editAdminProfileApi(_id, args, authorization )      
        }
          
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


export { signinUser , forgotPassword , getMe , editProfile} 