import { createSlice } from "@reduxjs/toolkit";
import { getSingleProfessor, getProfessor, countProfessor, editProfessor, deleteProfessor, createProfessor } from "./action"
const initialState = {
    professors: [],
    singleProfessor: {},
    count: 0,
    loading: false,
    error: false,
    success: false,
}


export const ProfessorsReducerSlice = createSlice({
    name: 'professors', 
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
        //getSingleProfessor
        [getSingleProfessor.pending]: (state, action) => {
            state.loading = true
        },

        [getSingleProfessor.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.singleProfessor = action.payload
        },

        [getSingleProfessor.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getProfessor
        [getProfessor.pending]: (state, action) => {
            state.loading = true
        },

        [getProfessor.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.professors = action.payload
        },

        [getProfessor.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //countProfessor
        [countProfessor.pending]: (state, action) => {
            state.loading = true
        },

        [countProfessor.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.count = action.payload
        },

        [countProfessor.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //editProfessor
        [editProfessor.pending]: (state, action) => {
            state.loading = true
        },

        [editProfessor.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.professors = action.payload //chaange
        },

        [editProfessor.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //deleteProfessor
        [deleteProfessor.pending]: (state, action) => {
            state.loading = true
        },

        [deleteProfessor.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.professors = action.payload // delete one
            state.count = -1
        },

        [deleteProfessor.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //createProfessor
        [createProfessor.pending]: (state, action) => {
            state.loading = true
        },

        [createProfessor.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.professors = [...state.professors, action.payload]
            state.count = +1
        },

        [createProfessor.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const { setCredentials, logOut, defaultState } = ProfessorsReducerSlice.actions;


export default ProfessorsReducerSlice.reducer;