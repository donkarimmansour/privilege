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
        cleanAlerts: (state) => {
            state.loading = false
            state.success = false
            state.error = false
        },
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
        [editLevel.pending]: (state) => {
            state.loading = true
        },

        [editLevel.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Updated"

             const editIndex = state.levels.findIndex(s => s._id === state.singleLevel._id)

            state.levels[editIndex] = {
                 ...state.levels[editIndex], ...action.meta.arg,
                actions: [ ...state.levels[editIndex].actions, action.meta.arg.actions ],
               // languages: action.meta.arg.languages,//remove this
            }
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
            state.success = "Deleted"
            state.levels = state.levels.filter(s => s._id !== action.meta.arg) 
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
            state.success = "Created"
            state.levels = [...state.levels, ...action.payload.map(l => ({...action.meta.arg , actions: [action.meta.arg.actions], languages: {name : l.name}, "_id" : l.id , studentsCount: 0})) ]
            state.count = action.payload.length
        },

        [createLevel.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})


export const { cleanAlerts } = LevelsReducerSlice.actions; 

export default LevelsReducerSlice.reducer; 