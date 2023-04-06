import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/reducer";
import TeachersReducer from "./teachers/reducer";
import StudentsReducer from "./students/reducer";
import PaymentsReducer from "./payments/reducer";
import ChatReducer from "./chat/reducer";
import DepartmentReducer from "./department/reducer";
import LanguagesReducer from "./languages/reducer";
import LibraryReducer from "./library/reducer";
import ExamReducer from "./exam/reducer";
import SmtpReducer from "./smtp/reducer";
import GroupeReducer from "./groupes/reducer";
import LevelReducer from "./levels/reducer";
import NotificationsReducer from "./notifications/reducer";
import AdminsReducer from "./admin/reducer";
import BillsReducer from "./bills/reducer";
import CancelationsReducer from "./cancelations/reducer";
import BlocksReducer from "./blocks/reducer";

const reducers = combineReducers({
  auth : AuthReducer ,
  teachers : TeachersReducer ,
  students : StudentsReducer ,
  payments : PaymentsReducer ,
  chat : ChatReducer ,
  departments : DepartmentReducer ,
  languages : LanguagesReducer ,
  library : LibraryReducer ,
  exam : ExamReducer ,
  smtp : SmtpReducer ,
  groupe : GroupeReducer ,
  level : LevelReducer ,
  notifications : NotificationsReducer ,
  admins : AdminsReducer ,
  bills : BillsReducer ,
  cancelations : CancelationsReducer ,
  blocks : BlocksReducer ,
})

const persistConfig = { 
    key: 'auth',
    storage,
    whitelist : ["auth"]
}

const appReducers = (state, action) => {

  if (action.type === "clearAll") {
    const newState = {auth: state.auth}
    return reducers(newState, action)
  }

  return reducers(state, action)
}

const persistReducers = persistReducer(persistConfig , appReducers)

const store = configureStore({
    reducer: persistReducers,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})


const persistor = persistStore(store)

export default store ;
export  { persistor } ;