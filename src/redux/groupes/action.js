import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi , editApi  , deleteApi , getApi , countApi } from "../../api/groupes";

const createGroupe =  createAsyncThunk("groupes/create" , async (args , GroupesApi) => {
    const { rejectWithValue , getState } = GroupesApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await createApi(args, authorization)
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const editGroupe =  createAsyncThunk("groupes/edit" , async (args , GroupesApi) => {
    const { rejectWithValue , getState } = GroupesApi 
    const { token } = getState().auth
    const { _id } = getState().groupe.singleGroupe
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editApi(_id, args, authorization )
        return res.data.msg

    } catch (err) { 
        return rejectWithValue(err.response.data.msg)
    }
})

const deleteGroupe =  createAsyncThunk("groupes/delete" , async (args , GroupesApi) => {
    const { rejectWithValue , getState } = GroupesApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await deleteApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getGroupe =  createAsyncThunk("groupes/get" , async (args , GroupesApi) => {
    const { rejectWithValue , getState } = GroupesApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const countGroupe =  createAsyncThunk("groupes/count" , async (args , GroupesApi) => {
    const { rejectWithValue , getState } = GroupesApi
    const { token } = getState().auth

 
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getSingleGroupe =  createAsyncThunk("groupes/getSingle" , async (args , GroupesApi) => {
    const { rejectWithValue , getState } = GroupesApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg[0]
        
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

export {getSingleGroupe , getGroupe , countGroupe , editGroupe , deleteGroupe ,createGroupe}  