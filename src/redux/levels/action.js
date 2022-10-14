import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi , editApi  , deleteApi , getApi , countApi } from "../../api/levels";

const createLevel =  createAsyncThunk("level/create" , async (args , LevelsApi) => {
    const { rejectWithValue , getState } = LevelsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await createApi(args, authorization)
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const editLevel =  createAsyncThunk("level/edit" , async (args , LevelsApi) => {
    const { rejectWithValue , getState } = LevelsApi
    const { token } = getState().auth
    const { _id } = getState().level.singleLevel
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editApi(_id, args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const deleteLevel =  createAsyncThunk("level/delete" , async (args , LevelsApi) => {
    const { rejectWithValue , getState } = LevelsApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try { 
        const res = await deleteApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getLevel =  createAsyncThunk("level/get" , async (args , LevelsApi) => {
    const { rejectWithValue , getState } = LevelsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const countLevel =  createAsyncThunk("level/count" , async (args , LevelsApi) => {
    const { rejectWithValue , getState } = LevelsApi
    const { token } = getState().auth

 
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getSingleLevel =  createAsyncThunk("level/getSingle" , async (args , LevelsApi) => {
    const { rejectWithValue , getState } = LevelsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg[0]
        
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

export {getSingleLevel , getLevel , countLevel , editLevel , deleteLevel ,createLevel} 