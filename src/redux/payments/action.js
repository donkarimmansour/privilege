import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi , editApi  , deleteApi , getApi , countApi } from "../../api/payments";

const createPayment =  createAsyncThunk("payments/create" , async (args , PaymentsApi) => {
    const { rejectWithValue , getState } = PaymentsApi
    const { token } = getState().auth

    try {
     const res = await  createApi(args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})


const editrofessor =  createAsyncThunk("payments/edit" , async (args , PaymentsApi) => {
    const { rejectWithValue , getState } = PaymentsApi
    const { token } = getState().auth
    const { _id } = getState().payments.singlePayment

    try {
     const res = await  editApi(_id , args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const deletePayment =  createAsyncThunk("payments/delete" , async (args , PaymentsApi) => {
    const { rejectWithValue , getState } = PaymentsApi
    const { token } = getState().auth

    try {
     const res = await  deleteApi(args , token)
     const data = res.json()
     return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const getPayment =  createAsyncThunk("payments/get" , async (args , PaymentsApi) => {
    const { rejectWithValue , getState } = PaymentsApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const countPayment =  createAsyncThunk("payments/count" , async (args , PaymentsApi) => {
    const { rejectWithValue , getState } = PaymentsApi
    const { token } = getState().auth

    try {
     const res = await  countApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const getSinglePayment =  createAsyncThunk("payments/getSingle" , async (args , PaymentsApi) => {
    const { rejectWithValue , getState } = PaymentsApi
    const { token } = getState().auth

    try {
     const res = await  getApi(args , token)
     const data = res.json()
     return data    
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

export {getSinglePayment , getPayment , countPayment , editrofessor , deletePayment ,createPayment} 