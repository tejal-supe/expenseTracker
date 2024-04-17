import React from 'react'
import {Route,Routes} from "react-router-dom"
import SignUp from '../pages/signup'
import SignIn from '../pages/signin'
import Transaction from '../pages/transaction'
import Page404 from '../components/ui/Page404'
import Home from '../pages/home'


const Navigator = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp/> }/>
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/tracker' element={<Transaction />} />
      <Route path='/*' element={<Page404/>} />
    </Routes>
  )
}

export default Navigator