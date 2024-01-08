import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './componets/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './componets/Create'
import Update from './componets/Update'




function App() {
  

  return (
    // <>
    // <Home/>
    //  </>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={< Home/>}/>
      <Route path="/Create" element={< Create/>}/>
      <Route path="/edit/:id" element={< Update/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
