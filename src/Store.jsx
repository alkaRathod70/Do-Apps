import configureStore from '@reduxjs/toolkit'
import UserReducer from './componets/UserReducer'

const store =configureStore({data:UserReducer})

export default store 