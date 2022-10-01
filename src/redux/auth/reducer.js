import { createSlice } from "@reduxjs/toolkit";
import { signupUser, signinUser, resetPassword, forgotPassword } from "./action"

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
        setCredentials: (state, action) => {
            const { user, token } = action.payload
            state.user = user
            state.token = token
            state.isLoggedIn = true
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
            state.isLoggedIn = false
        },
    },
    extraReducers: {
        //signinUser
        [signinUser.pending]: (state, action) => {
            state.loading = true
        },

        [signinUser.fulfilled]: (state, action) => {
            state.loading = false
            state.success = action.payload
        },

        [signinUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //signupUser
        [signupUser.pending]: (state, action) => {
            state.loading = true
        },

        [signupUser.fulfilled]: (state, action) => {
            state.loading = false
            state.success = action.payload
        },

        [signupUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //resetPassword
        [resetPassword.pending]: (state, action) => {
            state.loading = true
        },

        [resetPassword.fulfilled]: (state, action) => {
            state.loading = false
            state.success = action.payload
        },

        [resetPassword.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //forgotPassword
        [forgotPassword.pending]: (state, action) => {
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

export const { setCredentials, logOut, defaultState } = AuthReducerSlice.actions;


export default AuthReducerSlice.reducer;