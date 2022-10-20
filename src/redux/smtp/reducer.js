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
        cleanAlerts: (state) => {
            state.loading = false
            state.success = false
            state.error = false
        },
    },
    extraReducers: {
        //getSmtp
        [getSmtp.pending]: (state) => {
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
        [editSmtp.pending]: (state) => {
            state.loading = true
        },

        [editSmtp.fulfilled]: (state, action) => {
            state.loading = false
            state.success = action.payload
            state.smtp = {...state.smtp, ...action.meta.arg}
        },

        [editSmtp.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})


export const { cleanAlerts } = SmtpReducerSlice.actions;

export default SmtpReducerSlice.reducer;