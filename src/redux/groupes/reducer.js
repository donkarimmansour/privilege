import { createSlice } from "@reduxjs/toolkit";
import { getSingleGroupe, getGroupe, countGroupe, editGroupe, deleteGroupe, createGroupe } from "./action"
const initialState = {
    groupes: [],
    singleGroupe: {},
    count: 0,
    loading: false,
    error: false,
    success: false,
}


export const GroupesReducerSlice = createSlice({
    name: 'groupes',
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
        //getSingleGroupe
        [getSingleGroupe.pending]: (state, action) => {
            state.loading = true
        },

        [getSingleGroupe.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.singleGroupe = action.payload
        },

        [getSingleGroupe.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getGroupe
        [getGroupe.pending]: (state, action) => {
            state.loading = true
        },

        [getGroupe.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.groupes = action.payload
        },

        [getGroupe.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //countGroupe
        [countGroupe.pending]: (state, action) => {
            state.loading = true
        },

        [countGroupe.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.count = action.payload
        },

        [countGroupe.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //editGroupe
        [editGroupe.pending]: (state, action) => {
            state.loading = true
        },

        [editGroupe.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.groupes = action.payload //chaange
        },

        [editGroupe.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //deleteGroupe
        [deleteGroupe.pending]: (state, action) => {
            state.loading = true
        },

        [deleteGroupe.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.groupes = action.payload // delete one
            state.count = -1
        },

        [deleteGroupe.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //createGroupe
        [createGroupe.pending]: (state, action) => {
            state.loading = true
        },

        [createGroupe.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.groupes = [...state.groupes, action.payload]
            state.count = +1
        },

        [createGroupe.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})



export default GroupesReducerSlice.reducer; 