import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, editApi, deleteApi, getApi, countApi, editImageApi } from "../../api/teachers";
import { updateProfileImage } from "../auth/reducer"; 

const createTeacher = createAsyncThunk("teachers/create", async (args, TeachersApi) => {
    const { rejectWithValue, getState } = TeachersApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await createApi(args, authorization)
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})
 

const editTeacher = createAsyncThunk("teachers/edit", async (args, TeachersApi) => {
    const { rejectWithValue, getState } = TeachersApi
   const { token } = getState().auth
    const { _id } = getState().teachers.singleTeacher

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editApi(_id, args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})



const editTeacherImage = createAsyncThunk("teachers/editimage", async (args, TeachersApi) => {
    const { rejectWithValue, getState , dispatch } = TeachersApi
    const { token } = getState().auth
    const { image , type } = args

    const id = type === "profile" ? getState().auth.user._id : getState().teachers.singleTeacher._id

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

const deleteTeacher = createAsyncThunk("teachers/delete", async (args, TeachersApi) => {
    const { rejectWithValue, getState } = TeachersApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await deleteApi(args, authorization )
        return res.data.msg

    } catch (err) { 
        return rejectWithValue(err.response.data.msg)
    }
})

const getTeacher = createAsyncThunk("teachers/get", async (args, TeachersApi) => {
    const { rejectWithValue, getState } = TeachersApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }


    try {
        const res = await getApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const countTeacher = createAsyncThunk("teachers/count", async (args, TeachersApi) => {
    const { rejectWithValue, getState } = TeachersApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})  

const getSingleTeacher = createAsyncThunk("teachers/getSingle", async (args, TeachersApi) => {
    const { rejectWithValue, getState } = TeachersApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg[0]

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})
 

export { getSingleTeacher, getTeacher, countTeacher, editTeacher, deleteTeacher, createTeacher  , editTeacherImage  }