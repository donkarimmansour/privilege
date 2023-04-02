import { createSlice, current } from "@reduxjs/toolkit";
import { getNotifications  , createNotifications, getSingleNotification, seenNotification, deleteNotification, countNotifications, getUnReedNotifications } from "./action"


const initialState = {
    notifications: [],
    singleNotification: {},
    unReedNotifications:[],
    count: 0,
    loading: false,
    error: false,
    success: false,
}

export const NotificationsReducerSlice = createSlice({
    name: 'notifications', 
    initialState,
    reducers: { 
        cleanAlerts: (state) => {
            state.loading = false
            state.success = false
            state.error = false
        },
    },
    extraReducers: {
        //getSingleNotification
        [getSingleNotification.pending]: (state, action) => {
            state.loading = true
        },

        [getSingleNotification.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.singleNotification = action.payload
        },

        [getSingleNotification.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getUnReedNotifications
        [getUnReedNotifications.pending]: (state, action) => {
            state.loading = true
        },

        [getUnReedNotifications.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.unReedNotifications = action.payload
        },

        [getUnReedNotifications.rejected]: (state, action) => {
            state.loading = false
           // state.error = action.payload
        },

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


        //countNotifications
        [countNotifications.pending]: (state, action) => {
            state.loading = true
        },

        [countNotifications.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.count = action.payload
        },

        [countNotifications.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //seenNotification
        [seenNotification.pending]: (state) => {
            state.loading = true
        },

        [seenNotification.fulfilled]: (state, action) => {
            state.loading = false
           // state.success = "Updated"
            
            state.unReedNotifications = state.unReedNotifications.filter(s => s._id !== action.meta.arg._id) 
            const seenIndex = state.notifications.findIndex(s => s._id === state.singleNotification._id)

            // state.notifications[seenIndex] = {
            //      ...state.notifications[seenIndex],
            //     actions: [ ...state.notifications[seenIndex].actions, action.meta.arg.actions ],
            //     seen:true
            // }
        },

        [seenNotification.rejected]: (state, action) => {
            state.loading = false
            //state.error = action.payload
        },

        //deleteNotification
        [deleteNotification.pending]: (state, action) => {
            state.loading = true
        },

        [deleteNotification.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Deleted"
            state.notifications = state.notifications.filter(s => s._id !== action.meta.arg) 
            state.count = -1
        },

        [deleteNotification.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //createNotifications
        [createNotifications.pending]: (state, action) => {
            state.loading = true
        },

        [createNotifications.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Created"
            state.notifications = [...state.notifications, ...action.payload.map(l => ({...action.meta.arg , actions: [action.meta.arg.actions], seen: false, studentID: {firstname: l.firstname, lastname: l.lastname}, "_id" : l.id})) ]

            state.count = +1
        },

        [createNotifications.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
   
    }
})


export const { cleanAlerts } = NotificationsReducerSlice.actions; 
export default NotificationsReducerSlice.reducer; 
