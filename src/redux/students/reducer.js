import { createSlice } from "@reduxjs/toolkit";
import { getSingleStudent, getStudent, countStudent, editrofessor, deleteStudent, createStudent } from "./action"
const initialState = {
    students: [],
    singleStudent: {},
    count: 0,
    loading: false,
    error: false,
    success: false,
}


export const StudentsReducerSlice = createSlice({
    name: 'students',
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
        //getSingleStudent
        [getSingleStudent.pending]: (state, action) => {
            state.loading = true
        },

        [getSingleStudent.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.singleStudent = action.payload
        },

        [getSingleStudent.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getStudent
        [getStudent.pending]: (state, action) => {
            state.loading = true
        },

        [getStudent.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.Students = action.payload
        },

        [getStudent.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //countStudent
        [countStudent.pending]: (state, action) => {
            state.loading = true
        },

        [countStudent.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.count = action.payload
        },

        [countStudent.rejected]: (state, action) => {
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
            state.Students = action.payload //chaange
        },

        [editrofessor.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //deleteStudent
        [deleteStudent.pending]: (state, action) => {
            state.loading = true
        },

        [deleteStudent.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.Students = action.payload // delete one
            state.count = -1
        },

        [deleteStudent.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //createStudent
        [createStudent.pending]: (state, action) => {
            state.loading = true
        },

        [createStudent.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.Students = [...state.Students, action.payload]
            state.count = +1
        },

        [createStudent.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})



export default StudentsReducerSlice.reducer; 