import { createSlice } from "@reduxjs/toolkit";
import { getProfile , editProfile  } from "./action"
const initialState = {
    profile: {},
    Calender : [] ,
    loading: false,
    error: false,
    success: false,
}


export const ProfileReducerSlice = createSlice({
    name: 'profile',
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
        //getProfile
        [getProfile.pending]: (state, action) => {
            state.loading = true
        },

        [getProfile.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.profile = action.payload
        },

        [getProfile.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

    

        //editProfile
        [editProfile.pending]: (state, action) => {
            state.loading = true
        },

        [editProfile.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.profile = [...state.Profile, action.payload]
        },

        [editProfile.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})



export default ProfileReducerSlice.reducer;