import { createSlice } from "@reduxjs/toolkit";
import { getSinglePayment, getPayment, countPayment, editPayment, deletePayment, createPayment, getArchivedPayment, countArchivedPayment } from "./action"

const initialState = {
    archivedPayments: [],
    payments: [],
    singlePayment: {},
    archivedCount: 0,
    count: 0,
    loading: false,
    error: false,
    success: false,
}


export const PaymentsReducerSlice = createSlice({
    name: 'payments',
    initialState,
    reducers: {
        cleanAlerts: (state) => {
            state.loading = false
            state.success = false
            state.error = false
        },
    },
    extraReducers: {
        //getSinglePayment
        [getSinglePayment.pending]: (state, action) => {
            state.loading = true
        },

        [getSinglePayment.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.singlePayment = action.payload
        },

        [getSinglePayment.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getPayment
        [getPayment.pending]: (state, action) => {
            state.loading = true
        },

        [getPayment.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.payments = action.payload
        },

        [getPayment.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //countPayment
        [countPayment.pending]: (state, action) => {
            state.loading = true
        },

        [countPayment.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.count = action.payload
        },

        [countPayment.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //editPayment
        [editPayment.pending]: (state) => {
            state.loading = true
        },

        [editPayment.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Updated"
            
            const editIndex = state.payments.findIndex(s => s._id === state.singlePayment._id)
            state.payments[editIndex] = {
                 ...state.payments[editIndex],...action.meta.arg,
                actions: [ ...state.payments[editIndex].actions, action.meta.arg.actions ]
            }
        },

        [editPayment.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //deletePayment
        [deletePayment.pending]: (state, action) => {
            state.loading = true
        },

        [deletePayment.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Deleted"
            state.archivedPayments = [...state.archivedPayments, ...state.payments.filter(s => s._id === action.meta.arg) ] 
            state.payments = state.payments.filter(s => s._id !== action.meta.arg) 
            state.count = -1
        },

        [deletePayment.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //createPayment
        [createPayment.pending]: (state, action) => {
            state.loading = true
        },

        [createPayment.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Created"
            state.payments = [...state.payments,  {...action.meta.arg ,  "_id" : action.payload, actions: [action.meta.arg.actions]}]
            state.count = +1
        },

        [createPayment.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


        //getArchivedPayment
        [getArchivedPayment.pending]: (state) => {
            state.loading = true
        },

        [getArchivedPayment.fulfilled]: (state, action) => {
            state.loading = false
            state.archivedPayments = action.payload
        },

        [getArchivedPayment.rejected]: (state, action) => {
            state.loading = false
        },

        //countArchivedPayment
        [countArchivedPayment.pending]: (state) => {
            state.loading = true
        },

        [countArchivedPayment.fulfilled]: (state, action) => {
            state.loading = false
            state.archivedCount = action.payload
        },

        [countArchivedPayment.rejected]: (state, action) => {
            state.loading = false
        },

    }
})

export const { cleanAlerts } = PaymentsReducerSlice.actions; 


export default PaymentsReducerSlice.reducer;