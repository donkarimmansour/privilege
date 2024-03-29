import { createSlice } from "@reduxjs/toolkit";
import { getSingleStudent, getStudent, countStudent, editStudent, deleteStudent, createStudent, editStudentImage , countArchivedStudent, getArchivedStudent   } from "./action"


const initialState = {
    archivedStudents: [],
    students: [],
    singleStudent: {},
    archivedCount: 0,
    count: 0,
    loading: false,
    error: false,
    success: false,
}


export const StudentsReducerSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        cleanAlerts: (state) => {
            state.loading = false
            state.success = false
            state.error = false
        },
        cleanSingle: (state) => {
            state.singleStudent = {}
        },
    },
    extraReducers: {
        //getSingleStudent
        [getSingleStudent.pending]: (state) => {
            state.loading = true
        },

        [getSingleStudent.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            action.payload.password = ""
            state.singleStudent = action.payload
        },

        [getSingleStudent.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getStudent
        [getStudent.pending]: (state) => {
            state.loading = true
        },

        [getStudent.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.students = action.payload
        },

        [getStudent.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //countStudent
        [countStudent.pending]: (state) => {
            state.loading = true
        },

        [countStudent.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.count = action.payload
        },

        [countStudent.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //editStudent
        [editStudent.pending]: (state) => {
            state.loading = true
        },

        [editStudent.fulfilled]: (state , action) => {
            
            state.loading = false
            state.success = "Updated"
            
            const editIndex = state.students.findIndex(s => s._id === state.singleStudent._id)
            state.students[editIndex] = {
                 ...state.students[editIndex],...action.meta.arg,
                actions: [ ...state.students[editIndex].actions, action.meta.arg.actions ]
            }

        },

        [editStudent.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


         //editStudentImage
         [editStudentImage.pending]: (state) => {
            state.loading = true
        },

        [editStudentImage.fulfilled]: (state, action) => {
            
            state.loading = false
            state.success = "Uploaded"
            
            if(action.meta.arg.type !== "profile"){
                const editImageIndex = state.students.findIndex(s => s._id === state.singleStudent._id)
                state.students[editImageIndex].image = action.payload

                console.log(action.payload)
            }

            console.log(action.meta.arg.type);
           
        },

        [editStudentImage.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },



        //deleteStudent
        [deleteStudent.pending]: (state) => {
            state.loading = true
        },

        [deleteStudent.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Deleted"
            state.students = state.students.filter(s => s._id !== action.meta.arg) 
            state.count = -1
        },

        [deleteStudent.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //createStudent
        [createStudent.pending]: (state) => {
            state.loading = true
        },

        [createStudent.fulfilled]: (state, action) => {

            state.loading = false
            state.success = "Created"
            state.students = [...state.students,  {...action.meta.arg, image: "64138abb1da720d3bad0847a", "_id" : action.payload, actions: [action.meta.arg.actions]}]
            state.count = +1

        },

        [createStudent.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getArchivedStudent
        [getArchivedStudent.pending]: (state) => {
            state.loading = true
        },

        [getArchivedStudent.fulfilled]: (state, action) => {
            state.loading = false
            state.archivedStudents = action.payload
        },

        [getArchivedStudent.rejected]: (state, action) => {
            state.loading = false
        },

        //countArchivedStudent
        [countArchivedStudent.pending]: (state) => {
            state.loading = true
        },

        [countArchivedStudent.fulfilled]: (state, action) => {
            state.loading = false
            state.archivedCount = action.payload
        },

        [countArchivedStudent.rejected]: (state, action) => {
            state.loading = false
        },

    }
})



export const { cleanAlerts,cleanSingle } = StudentsReducerSlice.actions; 
export default StudentsReducerSlice.reducer; 