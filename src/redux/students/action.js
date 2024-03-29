import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, editApi, deleteApi, getApi, countApi, editImageApi, getArchivedApi, countArchivedApi } from "../../api/students";

import { updateProfileImage } from "../auth/reducer";

const createStudent = createAsyncThunk("students/create", async (args, StudentsApi) => {
    const { rejectWithValue, getState } = StudentsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` } 
 
    try {
        const res = await createApi(args, authorization)
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})
 

const editStudent = createAsyncThunk("students/edit", async (args, StudentsApi) => {
    const { rejectWithValue, getState } = StudentsApi
   const { token } = getState().auth
    const { _id } = getState().students.singleStudent

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editApi(_id, args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


 
const editStudentImage = createAsyncThunk("students/editimage", async (args, StudentsApi) => {
    const { rejectWithValue, getState , dispatch } = StudentsApi
    const { token } = getState().auth
    const { image , type } = args

    const id = type === "profile" ? getState().auth.user._id : getState().students.singleStudent._id

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

const deleteStudent = createAsyncThunk("students/delete", async (args, StudentsApi) => {
    const { rejectWithValue, getState } = StudentsApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await deleteApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getStudent = createAsyncThunk("students/get", async (args, StudentsApi) => {
    const { rejectWithValue, getState } = StudentsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }


    try {
        const res = await getApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const countStudent = createAsyncThunk("students/count", async (args, StudentsApi) => {
    const { rejectWithValue, getState } = StudentsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getSingleStudent = createAsyncThunk("students/getSingle", async (args, StudentsApi) => {
    const { rejectWithValue, getState } = StudentsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg[0]

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const getArchivedStudent = createAsyncThunk("students/archivedCount", async (args, StudentsApi) => {
    const { rejectWithValue, getState } = StudentsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }


    try {
        const res = await getArchivedApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const countArchivedStudent = createAsyncThunk("students/archivedStudents", async (args, StudentsApi) => {
    const { rejectWithValue, getState } = StudentsApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countArchivedApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})



export { getSingleStudent, getStudent, countStudent, editStudent, deleteStudent, createStudent  , editStudentImage, getArchivedStudent, countArchivedStudent }