import { createSlice } from "@reduxjs/toolkit";
import { getPromotions  , createPromotions, deletePromotion, countPromotions, getSinglePromotion, editPromotion } from "./action"


const initialState = {
    promotions: [],
    count: 0,
    singlePromotion: {},
    loading: false,
    error: false,
    success: false,
}

export const PromotionsReducerSlice = createSlice({
    name: 'promotions', 
    initialState,
    reducers: { 
        cleanAlerts: (state) => {
            state.loading = false
            state.success = false
            state.error = false
        },
    },
    extraReducers: {

        //getSinglePromotion
        [getSinglePromotion.pending]: (state, action) => {
            state.loading = true
        },

        [getSinglePromotion.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.singlePromotion = action.payload
        },

        [getSinglePromotion.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getPromotions
        [getPromotions.pending]: (state, action) => {
            state.loading = true
        },

        [getPromotions.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.promotions = action.payload
        },

        [getPromotions.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


        //countPromotions
        [countPromotions.pending]: (state, action) => {
            state.loading = true
        },

        [countPromotions.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.count = action.payload
        },

        [countPromotions.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


        //editPromotion
        [editPromotion.pending]: (state, action) => {
            state.loading = true
        },

        [editPromotion.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Updated"

            const editIndex = state.promotions.findIndex(s => s._id === state.singlePromotion._id)
            state.promotions[editIndex] = {
                ...state.promotions[editIndex], ...action.meta.arg,
                actions: [...state.promotions[editIndex].actions, action.meta.arg.actions]
            }
        },

        [editPromotion.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


        //deletePromotion
        [deletePromotion.pending]: (state, action) => {
            state.loading = true
        },

        [deletePromotion.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Deleted"
            state.promotions = state.promotions.filter(s => s._id !== action.meta.arg) 
            state.count = -1
        },

        [deletePromotion.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //createPromotions
        [createPromotions.pending]: (state, action) => {
            state.loading = true
        },

        [createPromotions.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Created"
            state.promotions = [...state.promotions, {...action.meta.arg ,  "_id" : action.payload , actions: [action.meta.arg.actions]} ]

            state.count = +1
        },

        [createPromotions.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
   
    }
})


export const { cleanAlerts } = PromotionsReducerSlice.actions; 
export default PromotionsReducerSlice.reducer; 
