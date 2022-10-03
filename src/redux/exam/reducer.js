import { createSlice } from "@reduxjs/toolkit";
import { getExam , createExam  } from "./action"
const initialState = {
    exam: [],
    loading: false,
    error: false,
    success: false,
}


export const ExamReducerSlice = createSlice({
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
        //getExam
        [getExam.pending]: (state, action) => {
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
        [createExam.pending]: (state, action) => {
            state.loading = true
        },

        [createExam.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.exam = [...state.exam, action.payload]
        },

        [createExam.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})



export default ExamReducerSlice.reducer;