import { ThemeProvider } from '@react-navigation/native';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import themeReducer from './themeSlice'
// 1. Create Reducer
const rootReducer = combineReducers({
    counter : counterReducer,
    theme : themeReducer,
})

// 2. Create Store
const store = configureStore({
    reducer : rootReducer
})

export default store;