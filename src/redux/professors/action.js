import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, editApi, deleteApi, getApi, countApi, editImageApi } from "../../api/professors";
import { updateProfileImage } from "../auth/reducer"; 

const createProfessor = createAsyncThunk("professors/create", async (args, ProfessorsApi) => {
    const { rejectWithValue, getState } = ProfessorsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await createApi(args, authorization)
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})
 

const editProfessor = createAsyncThunk("professors/edit", async (args, ProfessorsApi) => {
    const { rejectWithValue, getState } = ProfessorsApi
   const { token } = getState().auth
    const { _id } = getState().professors.singleProfessor

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editApi(_id, args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})



const editProfessorImage = createAsyncThunk("professors/editimage", async (args, ProfessorsApi) => {
    const { rejectWithValue, getState , dispatch } = ProfessorsApi
    const { token } = getState().auth
    const { image , type } = args

    const id = type === "profile" ? getState().auth.user._id : getState().professors.singleProfessor._id

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editImageApi(id, {image}, authorization )

        if(type === "profile"){
            dispatch(updateProfileImage(res.data.msg))
        }

        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const deleteProfessor = createAsyncThunk("professors/delete", async (args, ProfessorsApi) => {
    const { rejectWithValue, getState } = ProfessorsApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await deleteApi(args, authorization )
        return res.data.msg

    } catch (err) { 
        return rejectWithValue(err.response.data.msg)
    }
})

const getProfessor = createAsyncThunk("professors/get", async (args, ProfessorsApi) => {
    const { rejectWithValue, getState } = ProfessorsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }


    try {
        const res = await getApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const countProfessor = createAsyncThunk("professors/count", async (args, ProfessorsApi) => {
    const { rejectWithValue, getState } = ProfessorsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})  

const getSingleProfessor = createAsyncThunk("professors/getSingle", async (args, ProfessorsApi) => {
    const { rejectWithValue, getState } = ProfessorsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg[0]

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})
 

export { getSingleProfessor, getProfessor, countProfessor, editProfessor, deleteProfessor, createProfessor  , editProfessorImage  }