import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi , editApi  , deleteApi , getApi , countApi } from "../../api/courses";

const createCourse =  createAsyncThunk("course/create" , async (args , CoursesApi) => {
    const { rejectWithValue , getState } = CoursesApi
    const { token } = getState().auth

    try {
     const res = await  createApi(args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})


const editCourse =  createAsyncThunk("course/edit" , async (args , CoursesApi) => {
    const { rejectWithValue , getState } = CoursesApi
    const { token } = getState().auth
    const { _id } = getState().course.singleCourse

    try {
     const res = await  editApi(_id , args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const deleteCourse =  createAsyncThunk("course/delete" , async (args , CoursesApi) => {
    const { rejectWithValue , getState } = CoursesApi
    const { token } = getState().auth

    try {
     const res = await  deleteApi(args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const getCourse =  createAsyncThunk("course/get" , async (args , CoursesApi) => {
    const { rejectWithValue , getState } = CoursesApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const countCourse =  createAsyncThunk("course/count" , async (args , CoursesApi) => {
    const { rejectWithValue , getState } = CoursesApi
    const { token } = getState().auth

    try {
     const res = await  countApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const getSingleCourse =  createAsyncThunk("course/getSingle" , async (args , CoursesApi) => {
    const { rejectWithValue , getState } = CoursesApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

export {getSingleCourse , getCourse , countCourse , editCourse , deleteCourse ,createCourse} 