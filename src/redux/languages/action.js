import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, editApi, deleteApi, getApi, countApi } from "../../api/languages";

const createLanguage = createAsyncThunk("Languages/create", async (args, LanguagesApi) => {
    const { rejectWithValue, getState } = LanguagesApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try { 
        const res = await createApi(args, authorization)
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

 

const editLanguage = createAsyncThunk("Languages/edit", async (args, LanguagesApi) => {
    const { rejectWithValue, getState } = LanguagesApi
   const { token } = getState().auth
    const { _id } = getState().languages.singleLanguage

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editApi(_id, args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})
 

const deleteLanguage = createAsyncThunk("Languages/delete", async (args, LanguagesApi) => {
    const { rejectWithValue, getState } = LanguagesApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await deleteApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getLanguage = createAsyncThunk("Languages/get", async (args, LanguagesApi) => {
    const { rejectWithValue, getState } = LanguagesApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }


    try {
        const res = await getApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})



const countLanguage = createAsyncThunk("Languages/count", async (args, LanguagesApi) => {
    const { rejectWithValue, getState } = LanguagesApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getSingleLanguage = createAsyncThunk("Languages/getSingle", async (args, LanguagesApi) => {
    const { rejectWithValue, getState } = LanguagesApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg[0]

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


export { getSingleLanguage, getLanguage, countLanguage, editLanguage, deleteLanguage, createLanguage  }