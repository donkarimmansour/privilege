import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi , editApi  , deleteApi , getApi , countApi } from "../../api/department";

const createDepartment =  createAsyncThunk("department/create" , async (args , departmentApi) => {
    const { rejectWithValue , getState } = departmentApi
    const { token } = getState().auth

    try {
     const res = await  createApi(args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})


const editDepartment =  createAsyncThunk("department/edit" , async (args , departmentApi) => {
    const { rejectWithValue , getState } = departmentApi
    const { token } = getState().auth
    const { _id } = getState().departments.singleDepartment

    try {
     const res = await  editApi(_id , args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const deleteDepartment =  createAsyncThunk("department/delete" , async (args , departmentApi) => {
    const { rejectWithValue , getState } = departmentApi
    const { token } = getState().auth

    try {
     const res = await  deleteApi(args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const getDepartment =  createAsyncThunk("department/get" , async (args , departmentApi) => {
    const { rejectWithValue , getState } = departmentApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const countDepartment =  createAsyncThunk("department/count" , async (args , departmentApi) => {
    const { rejectWithValue , getState } = departmentApi
    const { token } = getState().auth

    try {
     const res = await  countApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const getSingleDepartment =  createAsyncThunk("department/getSingle" , async (args , departmentApi) => {
    const { rejectWithValue , getState } = departmentApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

export {getSingleDepartment , getDepartment , countDepartment , editDepartment , deleteDepartment ,createDepartment} 