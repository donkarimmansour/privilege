import { createSlice } from "@reduxjs/toolkit";
import { getSingleBill, getBill, countBill, deleteBill, countArchivedBill, getArchivedBill  } from "./action"



const initialState = {
    archivedBills: [],
    bills: [],
    singleBill: {},
    archivedCount: 0,
    count: 0,
    loading: false,
    error: false,
    success: false,
}


export const BillsReducerSlice = createSlice({
    name: 'bills',
    initialState,
    reducers: { 
        cleanAlerts: (state) => {
            state.loading = false
            state.success = false
            state.error = false
        },
    },
    extraReducers: {
        //getSingleBill
        [getSingleBill.pending]: (state, action) => {
            state.loading = true
        },

        [getSingleBill.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.singleBill = action.payload
        },

        [getSingleBill.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getBill
        [getBill.pending]: (state, action) => {
            state.loading = true
        },

        [getBill.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.bills = action.payload
        },

        [getBill.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //countBill
        [countBill.pending]: (state, action) => {
            state.loading = true
        },

        [countBill.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.count = action.payload
        },

        [countBill.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        // //editBill
        // [editBill.pending]: (state) => {
        //     state.loading = true
        // },

        // [editBill.fulfilled]: (state, action) => {
        //     // state.loading = false
        //     // state.success = "Updated"
            
        //     // const editIndex = state.bills.findIndex(s => s._id === state.singleBill._id)
        //     // state.bills[editIndex] = {
        //     //     ...action.meta.arg, ...state.bills[editIndex],
        //     //     actions: [ ...state.bills[editIndex].actions, action.meta.arg.actions ]
        //     // }
        // },

        // [editBill.rejected]: (state, action) => {
        //     state.loading = false
        //     state.error = action.payload
        // },

        //deleteBill
        [deleteBill.pending]: (state, action) => {
            state.loading = true
        },

        [deleteBill.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Deleted"
            state.archivedBills = [...state.archivedBills, ...state.bills.filter(s => s._id === action.meta.arg) ] 
            state.bills = state.bills.filter(s => s._id !== action.meta.arg) 
            state.count = -1
        },

        [deleteBill.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        // //createBill
        // [createBill.pending]: (state, action) => {
        //     state.loading = true
        // },

        // [createBill.fulfilled]: (state, action) => {
        //     state.loading = false
        //     state.success = "Created"
        //     state.bills = [...state.bills,  {...action.meta.arg ,  "_id" : action.payload}]
        //     state.count = +1
        // },

        // [createBill.rejected]: (state, action) => {
        //     state.loading = false
        //     state.error = action.payload
        // },


        //getArchivedBill
        [getArchivedBill.pending]: (state) => {
            state.loading = true
        },

        [getArchivedBill.fulfilled]: (state, action) => {
            state.loading = false
            state.archivedBills = action.payload
        },

        [getArchivedBill.rejected]: (state, action) => {
            state.loading = false
        },

        //countArchivedBill
        [countArchivedBill.pending]: (state) => {
            state.loading = true
        },

        [countArchivedBill.fulfilled]: (state, action) => {
            state.loading = false
            state.archivedCount = action.payload
        },

        [countArchivedBill.rejected]: (state, action) => {
            state.loading = false
        },

    
    }
})



export const { cleanAlerts } = BillsReducerSlice.actions; 
export default BillsReducerSlice.reducer; 
