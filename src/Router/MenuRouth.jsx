import React from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Home from'../Menu/Home/Home.jsx'
import Preview from '../Menu/Preview/Preview.jsx'
import Contact from '../Menu/Contact/Contact.jsx'
import Service from '../Menu/Service/Service.jsx'
import Navbar from './Navbar.jsx'
import User from '../Menu/User/User.jsx'
const MenuRouth = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Preview' element={<Preview/>}/>
            <Route path='/Service' element={<Service/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/User' element={<User/>}/>
        </Routes>
    </Router>
  )
}

export default MenuRouth