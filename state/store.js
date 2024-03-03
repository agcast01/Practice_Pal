import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import sessionsReducer from './sessions'
export default configureStore({
  reducer: {
    user: userReducer,
    sessions: sessionsReducer
  }
})