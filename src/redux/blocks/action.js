import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, deleteApi, getApi, countApi, editApi  } from "../../api/blocks";


const getBlocks =  createAsyncThunk("blocks/get" , async (args , BlocksApi) => {
    const { rejectWithValue , getState } = BlocksApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const countBlocks =  createAsyncThunk("blocks/count" , async (args , BlocksApi) => {
    const { rejectWithValue , getState } = BlocksApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countApi(args, authorization )
        return res.data.msg
        
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const createBlock =  createAsyncThunk("blocks/create" , async (args , BlocksApi) => {
    const { rejectWithValue , getState } = BlocksApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await createApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const editBlock =  createAsyncThunk("blocks/edit" , async (args , BlocksApi) => {
    const { rejectWithValue , getState } = BlocksApi
    const { token } = getState().auth
    const { _id } = getState().blocks.singleBlock
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editApi(_id, args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const deleteBlock =  createAsyncThunk("blocks/delete" , async (args , BlocksApi) => {
    const { rejectWithValue , getState } = BlocksApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try { 
        const res = await deleteApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getSingleBlock =  createAsyncThunk("blocks/getSingle" , async (args , BlocksApi) => {
    const { rejectWithValue , getState } = BlocksApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg[0]
        
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


export { getBlocks , createBlock, deleteBlock, countBlocks, editBlock, getSingleBlock} 