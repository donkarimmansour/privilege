import { createSlice } from "@reduxjs/toolkit";
import { getSingleProfessor, getProfessor, countProfessor, editProfessor, deleteProfessor, createProfessor , editProfessorImage  } from "./action"
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
        cleanAlerts: (state) => {
            state.loading = false
            state.success = false
            state.error = false
        },
    },
    extraReducers: {
        //getSingleProfessor
        [getSingleProfessor.pending]: (state) => {
            state.loading = true
        },

        [getSingleProfessor.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            action.payload.password = ""
            state.singleProfessor = action.payload
        },

        [getSingleProfessor.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getProfessor
        [getProfessor.pending]: (state) => {
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
        [countProfessor.pending]: (state) => {
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
        [editProfessor.pending]: (state) => {
            state.loading = true
        },

        [editProfessor.fulfilled]: (state , action) => {
            
            state.loading = false
            state.success = "Updated"
            
            const editIndex = state.professors.findIndex(s => s._id === state.singleProfessor._id)
            state.professors[editIndex] = { ...state.professors[editIndex] , ...action.meta.arg}

        },

        [editProfessor.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


         //editProfessorImage
         [editProfessorImage.pending]: (state) => {
            state.loading = true
        },

        [editProfessorImage.fulfilled]: (state, action) => {
            
            state.loading = false
            state.success = "Uploaded"
            
            if(action.meta.arg.type !== "profile"){
                const editImageIndex = state.professors.findIndex(s => s._id === state.singleProfessor._id)
                state.professors[editImageIndex].image = action.payload
            }
           
        },

        [editProfessorImage.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },



        //deleteProfessor
        [deleteProfessor.pending]: (state) => {
            state.loading = true
        },

        [deleteProfessor.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Deleted"
            state.professors = state.professors.filter(s => s._id !== action.meta.arg) 
            state.count = -1
        },

        [deleteProfessor.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //createProfessor
        [createProfessor.pending]: (state) => {
            state.loading = true
        },

        [createProfessor.fulfilled]: (state, action) => {

            state.loading = false
            state.success = "Created"
            state.professors = [...state.professors,  {...action.meta.arg ,  "_id" : action.payload}]
            state.count = +1

        },

        [createProfessor.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


    }
})

export const { cleanAlerts } = ProfessorsReducerSlice.actions;


export default ProfessorsReducerSlice.reducer;