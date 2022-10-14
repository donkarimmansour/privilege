import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi , editApi  , deleteApi , getApi , countApi } from "../../api/department";

const createDepartment =  createAsyncThunk("Department/create" , async (args , DepartmentsApi) => {
    const { rejectWithValue , getState } = DepartmentsApi
    const { token } = getState().auth
 
    const authorization = { "Authorization": `bearer ${token}` }

    try { 
        const res = await createApi(args, authorization)
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const editDepartment =  createAsyncThunk("Department/edit" , async (args , DepartmentsApi) => {
    const { rejectWithValue , getState } = DepartmentsApi
    const { token } = getState().auth
    const { _id } = getState().departments.singleDepartment
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editApi(_id, args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const deleteDepartment =  createAsyncThunk("Department/delete" , async (args , DepartmentsApi) => {
    const { rejectWithValue , getState } = DepartmentsApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await deleteApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getDepartment =  createAsyncThunk("Department/get" , async (args , DepartmentsApi) => {
    const { rejectWithValue , getState } = DepartmentsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const countDepartment =  createAsyncThunk("Department/count" , async (args , DepartmentsApi) => {
    const { rejectWithValue , getState } = DepartmentsApi
    const { token } = getState().auth

 
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getSingleDepartment =  createAsyncThunk("Department/getSingle" , async (args , DepartmentsApi) => {
    const { rejectWithValue , getState } = DepartmentsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg[0]
        
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

export {getSingleDepartment , getDepartment , countDepartment , editDepartment , deleteDepartment ,createDepartment} 