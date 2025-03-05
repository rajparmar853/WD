import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Json_Crud/Home'
import Create from './Json_Crud/Create'
import Update from './Json_Crud/Update'

import 'bootstrap/dist/css/bootstrap.min.css';
import Read from './Json_Crud/Read'

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/create' element={<Create/>}></Route> 
            <Route path='/update/:id' element={<Update/>}></Route>
            <Route path='/read/:id' element={<Read/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}   

export default App