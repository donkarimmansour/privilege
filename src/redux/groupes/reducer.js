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
        cleanAlerts: (state) => {
            state.loading = false
            state.success = false
            state.error = false
        },
        cleanSingle: (state) => {
            state.singleGroupe = {}
        },
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
            state.groupes = []
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
        [editGroupe.pending]: (state) => {
            state.loading = true
        },

        [editGroupe.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Updated"
            
            const editIndex = state.groupes.findIndex(s => s._id === state.singleGroupe._id)
            state.groupes[editIndex] = {
                 ...state.groupes[editIndex],...action.meta.arg,
                actions: [ ...state.groupes[editIndex].actions, action.meta.arg.actions ]
            }
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
            state.success = "Deleted"
            state.groupes = state.groupes.filter(s => s._id !== action.meta.arg) 
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
            state.success = "Created"
            state.groupes = [...state.groupes,  {...action.meta.arg ,  "_id" : action.payload, teachersCount: 0, studentsCount: 0, actions: [action.meta.arg.actions]}]
            state.count = +1
        },

        [createGroupe.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})


export const { cleanAlerts,cleanSingle } = GroupesReducerSlice.actions; 
export default GroupesReducerSlice.reducer; 