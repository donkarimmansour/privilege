import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/reducer";
import ProfessorsReducer from "./professors/reducer";

const reducers = combineReducers({
  auth : AuthReducer ,
  professors : ProfessorsReducer ,
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