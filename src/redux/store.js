import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import storage from 'redux-persist/lib/storage'



const persistConfig = {
    key: 'root',
    storage,
    version : 1,
}

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer : persistedReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck : false})
})

export const persistor = persistStore(store)