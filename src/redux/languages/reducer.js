import { createSlice } from "@reduxjs/toolkit";
import { getSingleLanguage , getLanguage , countLanguage , editLanguage , deleteLanguage ,createLanguage } from "./action"

const initialState = {
    languages: [],
    singleLanguage: {},
    count: 0,
    loading: false,
    error: false,
    success: false,
}
 

export const LanguageReducerSlice = createSlice({
    name: 'Language',
    initialState,
    reducers: {
        cleanAlerts: (state) => {
            state.loading = false
            state.success = false
            state.error = false
        },
    },
    extraReducers: {
        //getSingleLanguage
        [getSingleLanguage.pending]: (state) => {
            state.loading = true
        },

        [getSingleLanguage.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.singleLanguage = action.payload
        },

        [getSingleLanguage.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


        //getLanguage
        [getLanguage.pending]: (state) => {
            state.loading = true
        },

        [getLanguage.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.languages = action.payload
        },

        [getLanguage.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //countLanguage
        [countLanguage.pending]: (state) => {
            state.loading = true
        },

        [countLanguage.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.count = action.payload
        },

        [countLanguage.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //editLanguage
        [editLanguage.pending]: (state) => {
            state.loading = true
        },

        [editLanguage.fulfilled]: (state , action) => {
            
            state.loading = false
            state.success = "Updated"
            
            const editIndex = state.languages.findIndex(s => s._id === state.singleLanguage._id)
            state.languages[editIndex] = {
                 ...state.languages[editIndex],...action.meta.arg,
                actions: [ ...state.languages[editIndex].actions, action.meta.arg.actions ]
            }

        },

        [editLanguage.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },




        //deleteLanguage
        [deleteLanguage.pending]: (state) => {
            state.loading = true
        },

        [deleteLanguage.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Deleted"
            state.languages = state.languages.filter(s => s._id !== action.meta.arg) 
            state.count = -1
        },

        [deleteLanguage.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //createLanguage
        [createLanguage.pending]: (state) => {
            state.loading = true
        },

        [createLanguage.fulfilled]: (state, action) => {

            state.loading = false
            state.success = "Created"
            state.languages = [...state.languages,  {...action.meta.arg ,  "_id" : action.payload, teachersCount: 0, studentsCount: 0, actions: [action.meta.arg.actions]}]
            state.count = +1

        },

        [createLanguage.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

    }
})

export const { cleanAlerts } = LanguageReducerSlice.actions; 

export default LanguageReducerSlice.reducer;