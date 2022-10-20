import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, editApi, deleteApi, getApi, countApi, editImageApi } from "../../api/admin";
import { updateProfileImage } from "../auth/reducer";

const createAdmin = createAsyncThunk("admins/create", async (args, AdminsApi) => {
    const { rejectWithValue, getState } = AdminsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await createApi(args, authorization)
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})
 

const editAdmin = createAsyncThunk("admins/edit", async (args, AdminsApi) => {
    
    const { rejectWithValue, getState } = AdminsApi
   const { token } = getState().auth
    const { _id } = getState().admins.singleAdmin

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editApi(_id, args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


 
const editAdminImage = createAsyncThunk("admins/editimage", async (args, AdminsApi) => {
    const { rejectWithValue, getState , dispatch } = AdminsApi
    const { token } = getState().auth
    const { image , type } = args

    const id = type === "profile" ? getState().auth.user._id : getState().admins.singleAdmin._id

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editImageApi(id, {image}, authorization )

        if(type === "profile"){
            dispatch(updateProfileImage(res.data.msg))
        }

        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const deleteAdmin = createAsyncThunk("admins/delete", async (args, AdminsApi) => {
    const { rejectWithValue, getState } = AdminsApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await deleteApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getAdmin = createAsyncThunk("admins/get", async (args, AdminsApi) => {
    const { rejectWithValue, getState } = AdminsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }


    try {
        const res = await getApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const countAdmin = createAsyncThunk("admins/count", async (args, AdminsApi) => {
    const { rejectWithValue, getState } = AdminsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getSingleAdmin = createAsyncThunk("admins/getSingle", async (args, AdminsApi) => {
    const { rejectWithValue, getState } = AdminsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg[0]

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


export { getSingleAdmin, getAdmin, countAdmin, editAdmin, deleteAdmin, createAdmin  , editAdminImage }