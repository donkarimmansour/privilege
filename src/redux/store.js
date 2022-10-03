import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/reducer";
import ProfessorsReducer from "./professors/reducer";
import StudentsReducer from "./students/reducer";
import PaymentsReducer from "./payments/reducer";
import ChatReducer from "./chat/reducer";
import DepartmentReducer from "./department/reducer";
import CoursesReducer from "./courses/reducer";
import LibraryReducer from "./library/reducer";
import ExamReducer from "./exam/reducer";
import SmtpReducer from "./smtp/reducer";
import UserReducer from "./user/reducer";

const reducers = combineReducers({
  auth : AuthReducer ,
  professors : ProfessorsReducer ,
  students : StudentsReducer ,
  payments : PaymentsReducer ,
  chat : ChatReducer ,
  departments : DepartmentReducer ,
  courses : CoursesReducer ,
  library : LibraryReducer ,
  exam : ExamReducer ,
  smtp : SmtpReducer ,
  user : UserReducer ,
})

const persistConfig = { 
    key: 'auth',
    storage,
    whitelist : ["auth"]
}

const persistReducers = persistReducer(persistConfig , reducers)

const store = configureStore({
    reducer: persistReducers,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})


const persistor = persistStore(store)

export default store ;
export  { persistor } ;