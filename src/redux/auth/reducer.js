import { createSlice } from "@reduxjs/toolkit";
import { signinUser , forgotPassword , getMe , editProfile} from "./action"

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
        updateProfileImage: (state , action) => {
            state.user.image =  action.payload
        },
        updateProfileTest: (state , action) => {
            state.user.tested =  action.payload
        },
        
        // updateWholeProfile: (state , action) => {
        //     state.user = {...state.user , ...action.payload}  
        //     state.success = "Updated"
        // },

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


        //editProfile
        [editProfile.pending]: (state) => {
            state.loading = true
        },

        [editProfile.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Updated"
            state.user = {...state.user , ...action.meta.arg}
        },

        [editProfile.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const { cleanAlerts , logOut , updateProfileImage , updateProfileTest} = AuthReducerSlice.actions;


export default AuthReducerSlice.reducer;