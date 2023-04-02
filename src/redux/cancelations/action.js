import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, deleteApi, getApi, countApi, editApi  } from "../../api/cancelations";


const getCancelations =  createAsyncThunk("cancelations/get" , async (args , CancelationsApi) => {
    const { rejectWithValue , getState } = CancelationsApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const countCancelations =  createAsyncThunk("cancelations/count" , async (args , CancelationsApi) => {
    const { rejectWithValue , getState } = CancelationsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countApi(args, authorization )
        return res.data.msg
        
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const createCancelations =  createAsyncThunk("cancelations/create" , async (args , CancelationsApi) => {
    const { rejectWithValue , getState } = CancelationsApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await createApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const editCancelation =  createAsyncThunk("cancelations/edit" , async (args , CancelationsApi) => {
    const { rejectWithValue , getState } = CancelationsApi
    const { token } = getState().auth
    const { _id } = getState().cancelations.singleCancelation
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editApi(_id, args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const deleteCancelation =  createAsyncThunk("cancelations/delete" , async (args , CancelationsApi) => {
    const { rejectWithValue , getState } = CancelationsApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try { 
        const res = await deleteApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const getSingleCancelation =  createAsyncThunk("cancelations/getSingle" , async (args , CancelationsApi) => {
    const { rejectWithValue , getState } = CancelationsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg[0]
        
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})



export { getCancelations , createCancelations, deleteCancelation, countCancelations, editCancelation, getSingleCancelation} 