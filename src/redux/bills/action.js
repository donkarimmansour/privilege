import { createAsyncThunk } from "@reduxjs/toolkit";
import { countApi, createApi, deleteApi, editApi, getApi  } from "../../api/bills";


const getBill =  createAsyncThunk("bills/get" , async (args , BillApi) => {
    const { rejectWithValue , getState } = BillApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getSingleBill =  createAsyncThunk("bills/getSingle" , async (args , BillApi) => {
    const { rejectWithValue , getState } = BillApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg[0]
        
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const countBill =  createAsyncThunk("bills/count" , async (args , BillApi) => {
    const { rejectWithValue , getState } = BillApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countApi(args, authorization )
        return res.data.msg
        
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})



const createBill =  createAsyncThunk("bills/create" , async (args , BillApi) => {
    const { rejectWithValue , getState } = BillApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await createApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})



const editBill =  createAsyncThunk("bills/edit" , async (args , BillApi) => {
    const { rejectWithValue , getState } = BillApi
    const { token } = getState().auth
    const { _id } = getState().bills.singleBill
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editApi(_id, args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const deleteBill =  createAsyncThunk("bills/delete" , async (args , BillApi) => {
    const { rejectWithValue , getState } = BillApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try { 
        const res = await deleteApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const getArchivedBill =  createAsyncThunk("bills/archivedBills" , async (args , BillApi) => {
    const { rejectWithValue , getState } = BillApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const countArchivedBill =  createAsyncThunk("bills/archivedCount" , async (args , BillApi) => {
    const { rejectWithValue , getState } = BillApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countApi(args, authorization )
        return res.data.msg
        
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


export { getBill , createBill, getSingleBill, editBill, deleteBill, countBill, countArchivedBill, getArchivedBill} 