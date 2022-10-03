import { createSlice } from "@reduxjs/toolkit";
import { getSingleLibrary , getLibrary , countLibrary , editLibrary , deleteLibrary ,createLibrary } from "./action"
const initialState = {
    library: [],
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
        //getSingleLibrary
        [getSingleLibrary.pending]: (state, action) => {
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
        [getLibrary.pending]: (state, action) => {
            state.loading = true
        },

        [getLibrary.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.Library = action.payload
        },

        [getLibrary.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //countLibrary
        [countLibrary.pending]: (state, action) => {
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
        [editLibrary.pending]: (state, action) => {
            state.loading = true
        },

        [editLibrary.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.Library = action.payload //chaange
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
            // state.success = action.payload
            state.Library = action.payload // delete one
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
            // state.success = action.payload
            state.Library = [...state.Library, action.payload]
            state.count = +1
        },

        [createLibrary.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})



export default LibraryReducerSlice.reducer;