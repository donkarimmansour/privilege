import { createSlice } from "@reduxjs/toolkit";
import { signinUser , forgotPassword , getMe} from "./action"

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: false,
    success: false,
    isLoggedIn: false
}


export const AuthReducerSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            state.user = null
            state.token = null
            state.isLoggedIn = false
        }, 
        cleanAlerts: (state) => {
            state.loading = false
            state.success = false
            state.error = false
        },

    },
    extraReducers: {
        //signinUser
        [signinUser.pending]: (state) => {
            state.loading = true
        },

        // [signinUser.fulfilled]: (state, action) => {
        //     state.loading = true
        //     //state.success = action.payload
        //    // state.token = action.payload.TOKEN
        // },

        [signinUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getMe
        [getMe.pending]: (state) => {
            state.loading = true
        },

        [getMe.fulfilled]: (state, action) => {
            state.loading = false

            state.token = action.meta.arg.TOKEN
            action.payload.password = ""
            state.user = action.payload
            state.isLoggedIn = true            
        },

        [getMe.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


          //forgotPassword
          [forgotPassword.pending]: (state) => {
            state.loading = true
        },

        [forgotPassword.fulfilled]: (state, action) => {
            state.loading = false
            state.success = action.payload
        },

        [forgotPassword.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const { cleanAlerts , logOut} = AuthReducerSlice.actions;


export default AuthReducerSlice.reducer;