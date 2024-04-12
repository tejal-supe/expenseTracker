import React from 'react'
import {Route,Routes} from "react-router-dom"
import SignUp from '../pages/signup'


const Navigator = () => {
  return (
    <Routes>
      <Route path='/signup' element={<SignUp/> }/>
    </Routes>
  )
}

export default Navigator