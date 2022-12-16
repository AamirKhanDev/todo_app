import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App () {
    return (
      <div className='wrapper bg-dark text-white'>
        <div className='container'>
            <Routes>
                <Route path = "/" element = {<Home/>} />
                <Route path = "/login" element = {<Home/>} />
                <Route path = "/register" element = {<Home/>} />
            </Routes>

        </div>
     </div>
    ) 
}