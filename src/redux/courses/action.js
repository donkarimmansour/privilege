import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, editApi, deleteApi, getApi, countApi, editImageApi, getExtraApi } from "../../api/courses";

const createCourse = createAsyncThunk("Courses/create", async (args, CoursesApi) => {
    const { rejectWithValue, getState } = CoursesApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try { 
        const res = await createApi(args, authorization)
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

 

const editCourse = createAsyncThunk("Courses/edit", async (args, CoursesApi) => {
    const { rejectWithValue, getState } = CoursesApi
   const { token } = getState().auth
    const { _id } = getState().courses.singleCourse

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editApi(_id, args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})
 


const editCourseImage = createAsyncThunk("Courses/editimage", async (args, CoursesApi) => {
    const { rejectWithValue, getState } = CoursesApi
    const { token } = getState().auth
    const { image , type } = args

    const id = type === "profile" ? getState().auth.user._id : getState().courses.singleCourse._id

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await editImageApi(id, {image}, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const deleteCourse = createAsyncThunk("Courses/delete", async (args, CoursesApi) => {
    const { rejectWithValue, getState } = CoursesApi
    const { token } = getState().auth
    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await deleteApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getCourse = createAsyncThunk("Courses/get", async (args, CoursesApi) => {
    const { rejectWithValue, getState } = CoursesApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }


    try {
        const res = await getApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})



const countCourse = createAsyncThunk("Courses/count", async (args, CoursesApi) => {
    const { rejectWithValue, getState } = CoursesApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await countApi(args, authorization )
        return res.data.msg

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

const getSingleCourse = createAsyncThunk("Courses/getSingle", async (args, CoursesApi) => {
    const { rejectWithValue, getState } = CoursesApi
    const { token } = getState().auth

    const authorization = { "Authorization": `bearer ${token}` }

    try {
        const res = await getApi(args, authorization )
        return res.data.msg[0]

    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})


export { getSingleCourse, getCourse, countCourse, editCourse, deleteCourse, createCourse  , editCourseImage }