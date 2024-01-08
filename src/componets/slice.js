import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'


const store = configureStore ({
    reducer:{
      users:UserReducer
    }
  })
