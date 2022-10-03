import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi , editApi  , deleteApi , getApi , countApi } from "../../api/professors";

const createProfessor =  createAsyncThunk("professors/create" , async (args , ProfessorsApi) => {
    const { rejectWithValue , getState } = ProfessorsApi
    const { token } = getState().auth

    try {
     const res = await  createApi(args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})


const editProfessor =  createAsyncThunk("professors/edit" , async (args , ProfessorsApi) => {
    const { rejectWithValue , getState } = ProfessorsApi
    const { token } = getState().auth
    const { _id } = getState().professors.singleProfessor

    try {
     const res = await  editApi(_id , args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const deleteProfessor =  createAsyncThunk("professors/delete" , async (args , ProfessorsApi) => {
    const { rejectWithValue , getState } = ProfessorsApi
    const { token } = getState().auth

    try {
     const res = await  deleteApi(args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const getProfessor =  createAsyncThunk("professors/get" , async (args , ProfessorsApi) => {
    const { rejectWithValue , getState } = ProfessorsApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const countProfessor =  createAsyncThunk("professors/count" , async (args , ProfessorsApi) => {
    const { rejectWithValue , getState } = ProfessorsApi
    const { token } = getState().auth

    try {
     const res = await  countApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const getSingleProfessor =  createAsyncThunk("professors/getSingle" , async (args , ProfessorsApi) => {
    const { rejectWithValue , getState } = ProfessorsApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

export {getSingleProfessor , getProfessor , countProfessor , editProfessor , deleteProfessor ,createProfessor} 