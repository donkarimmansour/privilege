import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi , editApi  , deleteApi , getApi , countApi } from "../../api/levels";

const createLevel =  createAsyncThunk("levels/create" , async (args , LevelsApi) => {
    const { rejectWithValue , getState } = LevelsApi
    const { token } = getState().auth

    try {
     const res = await  createApi(args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})


const editLevel =  createAsyncThunk("levels/edit" , async (args , LevelsApi) => {
    const { rejectWithValue , getState } = LevelsApi
    const { token } = getState().auth
    const { _id } = getState().levels.dingleLevel

    try {
     const res = await  editApi(_id , args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const deleteLevel =  createAsyncThunk("levels/delete" , async (args , LevelsApi) => {
    const { rejectWithValue , getState } = LevelsApi
    const { token } = getState().auth

    try {
     const res = await  deleteApi(args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const getLevel =  createAsyncThunk("levels/get" , async (args , LevelsApi) => {
    const { rejectWithValue , getState } = LevelsApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const countLevel =  createAsyncThunk("levels/count" , async (args , LevelsApi) => {
    const { rejectWithValue , getState } = LevelsApi
    const { token } = getState().auth

    try {
     const res = await  countApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const getSingleLevel =  createAsyncThunk("levels/getSingle" , async (args , LevelsApi) => {
    const { rejectWithValue , getState } = LevelsApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

export {getSingleLevel , getLevel , countLevel , editLevel , deleteLevel ,createLevel} 