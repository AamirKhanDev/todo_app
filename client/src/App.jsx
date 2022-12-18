import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useSelector } from "react-redux"

export default function App () {

        return (
      <div className='wrapper bg-dark text-white'>
            <Navbar title ="Todo List"/>
            <div className='container'>
             
            <Routes>
                <Route path = "/" element = {<Home/>} />
                <Route path = "/login" element = {<Login/>} />
                <Route path = "/register" element = {<Register/>} />
                <Route path = "/*" element = {<Navigate to ="/"/>} />
            </Routes>

        </div>
            <Footer />
     </div>
    ) 
}