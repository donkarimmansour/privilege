import { createSlice } from "@reduxjs/toolkit";
import { getCancelations  , createCancelations, deleteCancelation, countCancelations, getSingleCancelation, editCancelation } from "./action"


const initialState = {
    cancelations: [],
    count: 0,
    singleCancelation: {},
    loading: false,
    error: false,
    success: false,
}

export const CancelationsReducerSlice = createSlice({
    name: 'cancelations', 
    initialState,
    reducers: { 
        cleanAlerts: (state) => {
            state.loading = false
            state.success = false
            state.error = false
        },
    },
    extraReducers: {

        //getSingleCancelation
        [getSingleCancelation.pending]: (state, action) => {
            state.loading = true
        },

        [getSingleCancelation.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.singleCancelation = action.payload
        },

        [getSingleCancelation.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getCancelations
        [getCancelations.pending]: (state, action) => {
            state.loading = true
        },

        [getCancelations.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.cancelations = action.payload
        },

        [getCancelations.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


        //countCancelations
        [countCancelations.pending]: (state, action) => {
            state.loading = true
        },

        [countCancelations.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.count = action.payload
        },

        [countCancelations.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //deleteCancelation
        [deleteCancelation.pending]: (state, action) => {
            state.loading = true
        },

        [deleteCancelation.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Deleted"
            state.cancelations = state.cancelations.filter(s => s._id !== action.meta.arg) 
            state.count = -1
        },

        [deleteCancelation.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //editCancelation
        [editCancelation.pending]: (state, action) => {
            state.loading = true
        },

        [editCancelation.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Updated"

            const editIndex = state.cancelations.findIndex(s => s._id === state.singleCancelation._id)
            state.cancelations[editIndex] = {
                ...state.cancelations[editIndex], ...action.meta.arg,
                actions: [...state.cancelations[editIndex].actions, action.meta.arg.actions]
            }
        },

        [editCancelation.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //createCancelations
        [createCancelations.pending]: (state, action) => {
            state.loading = true
        },

        [createCancelations.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Created"
            state.cancelations = [...state.cancelations, {...action.meta.arg ,  "_id" : action.payload , actions: [action.meta.arg.actions]} ]

            state.count = +1
        },

        [createCancelations.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
   
    }
})


export const { cleanAlerts } = CancelationsReducerSlice.actions; 
export default CancelationsReducerSlice.reducer; 
