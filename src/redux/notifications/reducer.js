import { createSlice } from "@reduxjs/toolkit";
import { getNotifications  , createNotifications  } from "./action"
const initialState = {
    notifications: {},
    loading: false,
    error: false,
    success: false,
}


export const NotificationsReducerSlice = createSlice({
    name: 'notifications',
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
        //getNotifications
        [getNotifications.pending]: (state, action) => {
            state.loading = true
        },

        [getNotifications.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.notifications = action.payload
        },

        [getNotifications.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


         //createNotifications
         [createNotifications.pending]: (state, action) => {
            state.loading = true
        },

        [createNotifications.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.notifications = action.payload
        },

        [createNotifications.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

    
    }
})



export default NotificationsReducerSlice.reducer;