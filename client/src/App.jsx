import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useSelector } from "react-redux"

export default function App () {
        const { todos } = useSelector(state => state.todos)

        return (
      <div className='wrapper bg-dark text-white'>
            <Navbar />
        <div className='container'>

            {todos.map((t) => {
                return <h2 key={t.text}>{t.text} | {String(t.isComplete)}</h2>
            })}
            
    

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