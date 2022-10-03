import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi , editApi  , deleteApi , getApi , countApi } from "../../api/library";

const createLibrary =  createAsyncThunk("library/create" , async (args , LibraryApi) => {
    const { rejectWithValue , getState } = LibraryApi
    const { token } = getState().auth

    try {
     const res = await  createApi(args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})


const editLibrary =  createAsyncThunk("library/edit" , async (args , LibraryApi) => {
    const { rejectWithValue , getState } = LibraryApi
    const { token } = getState().auth
    const { _id } = getState().library.singleLibrary

    try {
     const res = await  editApi(_id , args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const deleteLibrary =  createAsyncThunk("library/delete" , async (args , LibraryApi) => {
    const { rejectWithValue , getState } = LibraryApi
    const { token } = getState().auth

    try {
     const res = await  deleteApi(args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const getLibrary =  createAsyncThunk("library/get" , async (args , LibraryApi) => {
    const { rejectWithValue , getState } = LibraryApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const countLibrary =  createAsyncThunk("library/count" , async (args , LibraryApi) => {
    const { rejectWithValue , getState } = LibraryApi
    const { token } = getState().auth

    try {
     const res = await  countApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const getSingleLibrary =  createAsyncThunk("library/getSingle" , async (args , LibraryApi) => {
    const { rejectWithValue , getState } = LibraryApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

export {getSingleLibrary , getLibrary , countLibrary , editLibrary , deleteLibrary ,createLibrary} 