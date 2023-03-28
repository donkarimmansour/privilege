import { createSlice } from "@reduxjs/toolkit";
import { getSingleTeacher, getTeacher, countTeacher, editTeacher, deleteTeacher, createTeacher , editTeacherImage  } from "./action"
const initialState = {
    teachers: [],
    singleTeacher: {},
    count: 0,
    loading: false,
    error: false,
    success: false,
}


export const TeachersReducerSlice = createSlice({
    name: 'teachers', 
    initialState, 
    reducers: {
        cleanAlerts: (state) => {
            state.loading = false
            state.success = false
            state.error = false
        },
    },
    extraReducers: {
        //getSingleTeacher
        [getSingleTeacher.pending]: (state) => {
            state.loading = true
        },

        [getSingleTeacher.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            action.payload.password = ""
            state.singleTeacher = action.payload
        },

        [getSingleTeacher.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getTeacher
        [getTeacher.pending]: (state) => {
            state.loading = true
        },

        [getTeacher.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.teachers = action.payload
        },

        [getTeacher.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //countTeacher
        [countTeacher.pending]: (state) => {
            state.loading = true
        },

        [countTeacher.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.count = action.payload
        },

        [countTeacher.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //editTeacher
        [editTeacher.pending]: (state) => {
            state.loading = true
        },

        [editTeacher.fulfilled]: (state , action) => {
            
            state.loading = false
            state.success = "Updated"
            
            const editIndex = state.teachers.findIndex(s => s._id === state.singleTeacher._id)
            state.teachers[editIndex] = {
                ...action.meta.arg, ...state.teachers[editIndex],
                actions: [ ...state.teachers[editIndex].actions, action.meta.arg.actions ]
            }

        },

        [editTeacher.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


         //editTeacherImage
         [editTeacherImage.pending]: (state) => {
            state.loading = true
        },

        [editTeacherImage.fulfilled]: (state, action) => {
            
            state.loading = false
            state.success = "Uploaded"
            
            if(action.meta.arg.type !== "profile"){
                const editImageIndex = state.teachers.findIndex(s => s._id === state.singleTeacher._id)
                state.teachers[editImageIndex].image = action.payload
            }
           
        },

        [editTeacherImage.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },



        //deleteTeacher
        [deleteTeacher.pending]: (state) => {
            state.loading = true
        },

        [deleteTeacher.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Deleted"
            state.teachers = state.teachers.filter(s => s._id !== action.meta.arg) 
            state.count = -1
        },

        [deleteTeacher.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //createTeacher
        [createTeacher.pending]: (state) => {
            state.loading = true
        },

        [createTeacher.fulfilled]: (state, action) => {

            state.loading = false
            state.success = "Created"
            state.teachers = [...state.teachers,  {...action.meta.arg , image: "64138ac11da720d3bad0847d",  "_id" : action.payload, actions: [action.meta.arg.actions]}]
            state.count = +1

        },

        [createTeacher.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


    }
})

export const { cleanAlerts } = TeachersReducerSlice.actions;


export default TeachersReducerSlice.reducer;