import { configureStore } from '@reduxjs/toolkit'
import Auth from './feature/Auth.js'
import User from './feature/User.js'
export const store = configureStore({
  reducer:{
    auth:Auth,
    user:User
  },
})