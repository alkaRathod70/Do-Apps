import {configureStore} from '@reduxjs/toolkit'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import {Provider} from 'react-redux'
import UserReducer from './componets/UserReducer.js'

const store = configureStore ({
  reducer:{
    users:UserReducer
  }
  
})
console.log(store)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}> 
       <App/>
     </Provider> 

  // </React.StrictMode>,
)
