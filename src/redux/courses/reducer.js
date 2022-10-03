import { createSlice } from "@reduxjs/toolkit";
import { getSingleCourse , getCourse , countCourse , editCourse , deleteCourse ,createCourse } from "./action"
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
        //getSingleCourse
        [getSingleCourse.pending]: (state, action) => {
            state.loading = true
        },

        [getSingleCourse.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.singleCourses = action.payload
        },

        [getSingleCourse.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getCourse
        [getCourse.pending]: (state, action) => {
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
        [countCourse.pending]: (state, action) => {
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
        [editCourse.pending]: (state, action) => {
            state.loading = true
        },

        [editCourse.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.courses = action.payload //chaange
        },

        [editCourse.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //deleteCourse
        [deleteCourse.pending]: (state, action) => {
            state.loading = true
        },

        [deleteCourse.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.courses = action.payload // delete one
            state.count = -1
        },

        [deleteCourse.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //createCourse
        [createCourse.pending]: (state, action) => {
            state.loading = true
        },

        [createCourse.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.courses = [...state.courses, action.payload]
            state.count = +1
        },

        [createCourse.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})



export default CourseReducerSlice.reducer;