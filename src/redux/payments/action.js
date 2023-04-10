import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi , editApi  , deleteApi , getApi , countApi } from "../../api/payments";

const createPayment =  createAsyncThunk("Payment/create" , async (args , PaymentsApi) => {
    const { rejectWithValue , getState } = PaymentsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await createApi(args, authorization)
        return res.data.msg 
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const editPayment =  createAsyncThunk("Payment/edit" , async (args , PaymentsApi) => {
    const { rejectWithValue , getState } = PaymentsApi
    const { token } = getState().auth
    const { _id } = getState().payments.singlePayment
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editApi(_id, args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const deletePayment =  createAsyncThunk("Payment/delete" , async (args , PaymentsApi) => {
    const { rejectWithValue , getState } = PaymentsApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await deleteApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getPayment =  createAsyncThunk("Payment/get" , async (args , PaymentsApi) => {
    const { rejectWithValue , getState } = PaymentsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const countPayment =  createAsyncThunk("Payment/count" , async (args , PaymentsApi) => {
    const { rejectWithValue , getState } = PaymentsApi
    const { token } = getState().auth

 
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getSinglePayment =  createAsyncThunk("Payment/getSingle" , async (args , PaymentsApi) => {
    const { rejectWithValue , getState } = PaymentsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg[0]
        
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const getArchivedPayment =  createAsyncThunk("Payment/archivedPayments" , async (args , PaymentsApi) => {
    const { rejectWithValue , getState } = PaymentsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const countArchivedPayment =  createAsyncThunk("Payment/archivedCount" , async (args , PaymentsApi) => {
    const { rejectWithValue , getState } = PaymentsApi
    const { token } = getState().auth

 
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

export {getSinglePayment , getPayment , countPayment , editPayment , deletePayment ,createPayment, getArchivedPayment, countArchivedPayment} 