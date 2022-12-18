import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function LogoutButton () {

  const nav = useNavigate()
  const { user } = useSelector(state => state.users)

  const logout = () => {
    nav("/login")
    //do logout functionality later
  }

  if (!user) return <></>

  return (
    <button 
    className="btn text-success fw-bolder"
    onClick={logout}
    title={`Logged in as ${"a@a.com"}`}
    >
      Logout
    </button>
  )
}