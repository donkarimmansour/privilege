import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi , editApi  , deleteApi , getApi , countApi } from "../../api/students";

const createStudent =  createAsyncThunk("students/create" , async (args , StudentsApi) => {
    const { rejectWithValue , getState } = StudentsApi
    const { token } = getState().auth

    try {
     const res = await  createApi(args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})


const editStudent =  createAsyncThunk("students/edit" , async (args , StudentsApi) => {
    const { rejectWithValue , getState } = StudentsApi
    const { token } = getState().auth
    const { _id } = getState().students.dingleStudent

    try {
     const res = await  editApi(_id , args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const deleteStudent =  createAsyncThunk("students/delete" , async (args , StudentsApi) => {
    const { rejectWithValue , getState } = StudentsApi
    const { token } = getState().auth

    try {
     const res = await  deleteApi(args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const getStudent =  createAsyncThunk("students/get" , async (args , StudentsApi) => {
    const { rejectWithValue , getState } = StudentsApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const countStudent =  createAsyncThunk("students/count" , async (args , StudentsApi) => {
    const { rejectWithValue , getState } = StudentsApi
    const { token } = getState().auth

    try {
     const res = await  countApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const getSingleStudent =  createAsyncThunk("students/getSingle" , async (args , StudentsApi) => {
    const { rejectWithValue , getState } = StudentsApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

export {getSingleStudent , getStudent , countStudent , editStudent , deleteStudent ,createStudent} 