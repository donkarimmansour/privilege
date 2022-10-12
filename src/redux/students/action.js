import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, editApi, deleteApi, getApi, countApi, editImageApi, editProfileApi } from "../../api/students";

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


const editStudentProfile = createAsyncThunk("students/edit", async (args, StudentsApi) => {
    const { rejectWithValue, getState } = StudentsApi
    const { token } = getState().auth
    const { _id } = getState().auth.user

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editProfileApi(_id, args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


const editStudentImage = createAsyncThunk("students/editimage", async (args, StudentsApi) => {
    const { rejectWithValue, getState } = StudentsApi
    const { token } = getState().auth
    const { image , type } = args
    const id =  type === "init" ? getState().students.singleStudent._id : getState().auth.user._id
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editImageApi(id, {image}, authorization )
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


export { getSingleStudent, getStudent, countStudent, editStudent, deleteStudent, createStudent  , editStudentImage , editStudentProfile }