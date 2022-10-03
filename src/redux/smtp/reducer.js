import { createSlice } from "@reduxjs/toolkit";
import { getSmtp , editSmtp  } from "./action"
const initialState = {
    smtp: {},
    loading: false,
    error: false,
    success: false,
}


export const SmtpReducerSlice = createSlice({
    name: 'exam',
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
        //getSmtp
        [getSmtp.pending]: (state, action) => {
            state.loading = true
        },

        [getSmtp.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.smtp = action.payload
        },

        [getSmtp.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

    

        //editSmtp
        [editSmtp.pending]: (state, action) => {
            state.loading = true
        },

        [editSmtp.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.smtp = [...state.smtp, action.payload]
        },

        [editSmtp.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})



export default SmtpReducerSlice.reducer;