import { createSlice } from "@reduxjs/toolkit";
import { getSingleCourse , getCourse , countCourse , editCourse , deleteCourse ,createCourse , editCourseImage } from "./action"

const initialState = {
    courses: [],
    singleCours: {},
    count: 0,
    loading: false,
    error: false,
    success: false,
}
 

export const CourseReducerSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        cleanAlerts: (state) => {
            state.loading = false
            state.success = false
            state.error = false
        },
    },
    extraReducers: {
        //getSingleCourse
        [getSingleCourse.pending]: (state) => {
            state.loading = true
        },

        [getSingleCourse.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            action.payload.password = ""
            state.singleCourse = action.payload
        },

        [getSingleCourse.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getCourse
        [getCourse.pending]: (state) => {
            state.loading = true
        },

        [getCourse.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.courses = action.payload
        },

        [getCourse.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //countCourse
        [countCourse.pending]: (state) => {
            state.loading = true
        },

        [countCourse.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.count = action.payload
        },

        [countCourse.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //editCourse
        [editCourse.pending]: (state) => {
            state.loading = true
        },

        [editCourse.fulfilled]: (state , action) => {
            
            state.loading = false
            state.success = "Updated"
            
            const editIndex = state.courses.findIndex(s => s._id === state.singleCourse._id)
            state.courses[editIndex] = { ...state.courses[editIndex] , ...action.meta.arg}

        },

        [editCourse.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


         //editCourseImage
         [editCourseImage.pending]: (state) => {
            state.loading = true
        },

        [editCourseImage.fulfilled]: (state, action) => {
            
            state.loading = false
            state.success = "Uploaded"
            
            if(action.meta.arg.type !== "profile"){
                const editImageIndex = state.courses.findIndex(s => s._id === state.singleCourse._id)
                state.courses[editImageIndex].image = action.payload
            }
           
        },

        [editCourseImage.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },



        //deleteCourse
        [deleteCourse.pending]: (state) => {
            state.loading = true
        },

        [deleteCourse.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Deleted"
            state.courses = state.courses.filter(s => s._id !== action.meta.arg) 
            state.count = -1
        },

        [deleteCourse.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //createCourse
        [createCourse.pending]: (state) => {
            state.loading = true
        },

        [createCourse.fulfilled]: (state, action) => {

            state.loading = false
            state.success = "Created"
            state.courses = [...state.courses,  {...action.meta.arg ,  "_id" : action.payload}]
            state.count = +1

        },

        [createCourse.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

    }
})

export const { cleanAlerts } = CourseReducerSlice.actions; 

export default CourseReducerSlice.reducer;