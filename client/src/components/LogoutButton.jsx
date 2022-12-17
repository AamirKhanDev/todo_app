import { useNavigate } from "react-router-dom"

export default function LogoutButton () {

  const nav = useNavigate()

  const logout = () => {
    nav("/login")
    //do logout functionality later
  }

  return (
    <button 
    className="btn text-success fw-bolder"
    onClick={logout}
    >
      Logout
    </button>
  )
}