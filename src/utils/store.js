import { configureStore } from '@reduxjs/toolkit'

// Reducers
import userReducer from '../features/user'

export default configureStore({
    reducer: {
        user: userReducer,
    },
})
