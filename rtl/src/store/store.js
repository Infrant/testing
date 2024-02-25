import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";

const rootReducer = combineReducers({
    counter: counterSlice
})

export const createReduxStore = (preloadedState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}