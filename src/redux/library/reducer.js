import { createSlice } from "@reduxjs/toolkit";
import { getSingleLibrary , getLibrary , countLibrary , editLibrary , deleteLibrary ,createLibrary } from "./action"
const initialState = {
    libraries: [],
    singleLibrary: {},
    count: 0,
    loading: false,
    error: false,
    success: false,
}

 
export const LibraryReducerSlice = createSlice({
    name: 'library',
    initialState,
    reducers: {
        cleanAlerts: (state) => {
            state.loading = false
            state.success = false
            state.error = false
        },
    },
    extraReducers: {
        //getSingleLibrary
        [getSingleLibrary.pending]: (state) => {
            state.loading = true
        },

        [getSingleLibrary.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.singleLibrary = action.payload
        },

        [getSingleLibrary.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getLibrary
        [getLibrary.pending]: (state) => {
            state.loading = true
        },

        [getLibrary.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.libraries = action.payload
        },

        [getLibrary.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //countLibrary
        [countLibrary.pending]: (state) => {
            state.loading = true
        },

        [countLibrary.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.count = action.payload
        },

        [countLibrary.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //editLibrary
        [editLibrary.pending]: (state) => {
            state.loading = true
        },

        [editLibrary.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Updated"
            
            const editIndex = state.libraries.findIndex(s => s._id === state.singleLibrary._id)
            state.libraries[editIndex] = { ...state.libraries[editIndex] , ...action.meta.arg}
        },

        [editLibrary.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //deleteLibrary
        [deleteLibrary.pending]: (state, action) => {
            state.loading = true
        },

        [deleteLibrary.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Deleted"
            state.libraries = state.libraries.filter(s => s._id !== action.meta.arg) 
            state.count = -1
        },

        [deleteLibrary.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //createLibrary
        [createLibrary.pending]: (state, action) => {
            state.loading = true
        },

        [createLibrary.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Created"
            state.libraries = [...state.libraries,  {...action.meta.arg ,  "_id" : action.payload}]
            state.count = +1
        },

        [createLibrary.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})


export const { cleanAlerts } = LibraryReducerSlice.actions; 

export default LibraryReducerSlice.reducer;