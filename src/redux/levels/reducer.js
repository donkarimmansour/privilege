import { createSlice } from "@reduxjs/toolkit";
import { getSingleLevel, getLevel, countLevel, editLevel, deleteLevel, createLevel } from "./action"
const initialState = {
    levels: [],
    singleLevel: {},
    count: 0,
    loading: false,
    error: false,
    success: false,
}


export const LevelsReducerSlice = createSlice({
    name: 'levels',
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
        //getSingleLevel
        [getSingleLevel.pending]: (state, action) => {
            state.loading = true
        },

        [getSingleLevel.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.singleLevel = action.payload
        },

        [getSingleLevel.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getLevel
        [getLevel.pending]: (state, action) => {
            state.loading = true
        },

        [getLevel.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.levels = action.payload
        },

        [getLevel.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //countLevel
        [countLevel.pending]: (state, action) => {
            state.loading = true
        },

        [countLevel.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.count = action.payload
        },

        [countLevel.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //editLevel
        [editLevel.pending]: (state, action) => {
            state.loading = true
        },

        [editLevel.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.levels = action.payload //chaange
        },

        [editLevel.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //deleteLevel
        [deleteLevel.pending]: (state, action) => {
            state.loading = true
        },

        [deleteLevel.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.levels = action.payload // delete one
            state.count = -1
        },

        [deleteLevel.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //createLevel
        [createLevel.pending]: (state, action) => {
            state.loading = true
        },

        [createLevel.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.levels = [...state.levels, action.payload]
            state.count = +1
        },

        [createLevel.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})



export default LevelsReducerSlice.reducer; 