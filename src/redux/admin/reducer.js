import { createSlice } from "@reduxjs/toolkit";
import { getSingleAdmin, getAdmin, countAdmin, editAdmin, deleteAdmin, createAdmin, editAdminImage  } from "./action"


const initialState = {
    admins: [],
    singleAdmin: {},
    count: 0,
    loading: false,
    error: false,
    success: false,
}


export const AdminsReducerSlice = createSlice({
    name: 'admins',
    initialState,
    reducers: {
        cleanAlerts: (state) => {
            state.loading = false
            state.success = false
            state.error = false
        },
    },
    extraReducers: {
        //getSingleAdmin
        [getSingleAdmin.pending]: (state) => {
            state.loading = true
        },

        [getSingleAdmin.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            action.payload.password = ""
            state.singleAdmin = action.payload
        },

        [getSingleAdmin.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getAdmin
        [getAdmin.pending]: (state) => {
            state.loading = true
        },

        [getAdmin.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.admins = action.payload
        },

        [getAdmin.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //countAdmin
        [countAdmin.pending]: (state) => {
            state.loading = true
        },

        [countAdmin.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.count = action.payload
        },

        [countAdmin.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

       // editAdmin
        [editAdmin.pending]: (state) => {
            state.loading = true
        },

        [editAdmin.fulfilled]: (state , action) => {
                    
            state.loading = false
            state.success = "Updated"

            const editIndex = state.admins.findIndex(s => s._id === state.singleAdmin._id)
            state.admins[editIndex] = { ...state.admins[editIndex] , ...action.meta.arg}

        },

        [editAdmin.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


         //editAdminImage
         [editAdminImage.pending]: (state) => {
            state.loading = true
        },

        [editAdminImage.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Uploaded"
            
            if(action.meta.arg.type !== "profile"){
                const editImageIndex = state.admins.findIndex(s => s._id === state.singleAdmin._id)
                state.admins[editImageIndex].image = action.payload
            }
           
        },

        [editAdminImage.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },



        //deleteAdmin
        [deleteAdmin.pending]: (state) => {
            state.loading = true
        },

        [deleteAdmin.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Deleted"
            state.admins = state.admins.filter(s => s._id !== action.meta.arg) 
            state.count = -1
        },

        [deleteAdmin.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //createAdmin
        [createAdmin.pending]: (state) => {
            state.loading = true
        },

        [createAdmin.fulfilled]: (state, action) => {

            state.loading = false
            state.success = "Created"
            state.admins = [...state.admins,  {...action.meta.arg ,  "_id" : action.payload}]
            state.count = +1

        },

        [createAdmin.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },




    }
})



export const { cleanAlerts } = AdminsReducerSlice.actions; 
export default AdminsReducerSlice.reducer; 