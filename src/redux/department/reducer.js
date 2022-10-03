import { createSlice } from "@reduxjs/toolkit";
import { getSingleDepartment , getDepartment , countDepartment , editDepartment , deleteDepartment ,createDepartment } from "./action"
const initialState = {
    departments: [],
    singleDepartment: {},
    count: 0,
    loading: false,
    error: false,
    success: false,
}


export const DepartmentReducerSlice = createSlice({
    name: 'department',
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
        //getSingleDepartment
        [getSingleDepartment.pending]: (state, action) => {
            state.loading = true
        },

        [getSingleDepartment.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.singleDepartment = action.payload
        },

        [getSingleDepartment.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getDepartment
        [getDepartment.pending]: (state, action) => {
            state.loading = true
        },

        [getDepartment.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.department = action.payload
        },

        [getDepartment.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //countDepartment
        [countDepartment.pending]: (state, action) => {
            state.loading = true
        },

        [countDepartment.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.count = action.payload
        },

        [countDepartment.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //editDepartment
        [editDepartment.pending]: (state, action) => {
            state.loading = true
        },

        [editDepartment.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.departments = action.payload //chaange
        },

        [editDepartment.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //deleteDepartment
        [deleteDepartment.pending]: (state, action) => {
            state.loading = true
        },

        [deleteDepartment.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.departments = action.payload // delete one
            state.count = -1
        },

        [deleteDepartment.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //createDepartment
        [createDepartment.pending]: (state, action) => {
            state.loading = true
        },

        [createDepartment.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.departments = [...state.departments, action.payload]
            state.count = +1
        },

        [createDepartment.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})



export default DepartmentReducerSlice.reducer;