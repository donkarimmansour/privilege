import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, deleteApi, getApi, countApi, editApi  } from "../../api/promotions";


const getPromotions =  createAsyncThunk("promotions/get" , async (args , PromotionsApi) => {
    const { rejectWithValue , getState } = PromotionsApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const countPromotions =  createAsyncThunk("promotions/count" , async (args , PromotionsApi) => {
    const { rejectWithValue , getState } = PromotionsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countApi(args, authorization )
        return res.data.msg
        
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const createPromotions =  createAsyncThunk("promotions/create" , async (args , PromotionsApi) => {
    const { rejectWithValue , getState } = PromotionsApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await createApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const editPromotion =  createAsyncThunk("promotions/edit" , async (args , PromotionsApi) => {
    const { rejectWithValue , getState } = PromotionsApi
    const { token } = getState().auth
    const { _id } = getState().promotions.singlePromotion
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editApi(_id, args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const deletePromotion =  createAsyncThunk("promotions/delete" , async (args , PromotionsApi) => {
    const { rejectWithValue , getState } = PromotionsApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try { 
        const res = await deleteApi(args, authorization )
        return res.data.msg
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getSinglePromotion =  createAsyncThunk("promotions/getSingle" , async (args , PromotionsApi) => {
    const { rejectWithValue , getState } = PromotionsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg[0]
        
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


export { getPromotions , createPromotions, deletePromotion, countPromotions, editPromotion, getSinglePromotion} 