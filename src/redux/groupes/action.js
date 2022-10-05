import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi , editApi  , deleteApi , getApi , countApi } from "../../api/groupes";

const createGroupe =  createAsyncThunk("groupes/create" , async (args , GroupesApi) => {
    const { rejectWithValue , getState } = GroupesApi
    const { token } = getState().auth

    try {
     const res = await  createApi(args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})


const editGroupe =  createAsyncThunk("groupes/edit" , async (args , GroupesApi) => {
    const { rejectWithValue , getState } = GroupesApi
    const { token } = getState().auth
    const { _id } = getState().groupes.dingleGroupe

    try {
     const res = await  editApi(_id , args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const deleteGroupe =  createAsyncThunk("groupes/delete" , async (args , GroupesApi) => {
    const { rejectWithValue , getState } = GroupesApi
    const { token } = getState().auth

    try {
     const res = await  deleteApi(args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const getGroupe =  createAsyncThunk("groupes/get" , async (args , GroupesApi) => {
    const { rejectWithValue , getState } = GroupesApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const countGroupe =  createAsyncThunk("groupes/count" , async (args , GroupesApi) => {
    const { rejectWithValue , getState } = GroupesApi
    const { token } = getState().auth

    try {
     const res = await  countApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const getSingleGroupe =  createAsyncThunk("groupes/getSingle" , async (args , GroupesApi) => {
    const { rejectWithValue , getState } = GroupesApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

export {getSingleGroupe , getGroupe , countGroupe , editGroupe , deleteGroupe ,createGroupe} 