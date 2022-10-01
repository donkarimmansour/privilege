import { createSlice } from "@reduxjs/toolkit";
import { getSinglePayment, getPayment, countPayment, editrofessor, deletePayment, createPayment } from "./action"
const initialState = {
    payments: [],
    singlePayment: {},
    count: 0,
    loading: false,
    error: false,
    success: false,
}


export const PaymentsReducerSlice = createSlice({
    name: 'payments',
    initialState,
    reducers: {
        // create: (state, action) => {

        // },
        // delete: (state, action) => {

        // },
        // edit: (state, action) => {

        // },
        // count: (state, action) => {

        // },
        // get: (state, action) => {

        // },
        // getSingle: (state, action) => {

        // },
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
            state.Payments = action.payload
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

        //editrofessor
        [editrofessor.pending]: (state, action) => {
            state.loading = true
        },

        [editrofessor.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.Payments = action.payload //chaange
        },

        [editrofessor.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //deletePayment
        [deletePayment.pending]: (state, action) => {
            state.loading = true
        },

        [deletePayment.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.Payments = action.payload // delete one
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
            // state.success = action.payload
            state.Payments = [...state.Payments, action.payload]
            state.count = +1
        },

        [createPayment.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})



export default PaymentsReducerSlice.reducer;