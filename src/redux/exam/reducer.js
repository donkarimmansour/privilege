import { createSlice } from "@reduxjs/toolkit";
import { getExam , createExam  } from "./action"

const initialState = {
    exam: {},
    loading: false,
    error: false,
    success: false,
}


export const ExamReducerSlice = createSlice({
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
        //getExam
        [getExam.pending]: (state) => {
            state.loading = true
        },

        [getExam.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.exam = action.payload
        },

        [getExam.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

    

        //createExam
        [createExam.pending]: (state) => {
            state.loading = true
        },

        [createExam.fulfilled]: (state, action) => {
            state.loading = false
            state.success = action.payload
        },

        [createExam.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const { cleanAlerts } = ExamReducerSlice.actions; 

export default ExamReducerSlice.reducer;