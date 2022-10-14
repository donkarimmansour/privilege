import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi , editApi  , deleteApi , getApi , countApi } from "../../api/library";

const createLibrary =  createAsyncThunk("library/create" , async (args , LibrarysApi) => {
    const { rejectWithValue , getState } = LibrarysApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await createApi(args, authorization)
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const editLibrary =  createAsyncThunk("library/edit" , async (args , LibrarysApi) => {
    const { rejectWithValue , getState } = LibrarysApi
    const { token } = getState().auth
    const { _id } = getState().library.singleLibrary
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editApi(_id, args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const deleteLibrary =  createAsyncThunk("library/delete" , async (args , LibrarysApi) => {
    const { rejectWithValue , getState } = LibrarysApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await deleteApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getLibrary =  createAsyncThunk("library/get" , async (args , LibrarysApi) => {
    const { rejectWithValue , getState } = LibrarysApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const countLibrary =  createAsyncThunk("library/count" , async (args , LibrarysApi) => {
    const { rejectWithValue , getState } = LibrarysApi
    const { token } = getState().auth

 
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getSingleLibrary =  createAsyncThunk("library/getSingle" , async (args , LibrarysApi) => {
    const { rejectWithValue , getState } = LibrarysApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg[0]
        
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

export {getSingleLibrary , getLibrary , countLibrary , editLibrary , deleteLibrary ,createLibrary} 