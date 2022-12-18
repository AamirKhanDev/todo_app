import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useSelector} from "react-redux"
import Overlay from "../components/Overlay"


export default function Register () {

  const nav = useNavigate()
  const { isLoading } = useSelector((state) => state.users)

  const [form, setForm] = useState ({email: "", password: "", confirm: ""})

  const onFormChange = (e) => setForm({...form, [e.target.name] : e.target.value})

  const submit = (e) => {
    e.preventDefault()
    console.log(form)
  }

    if (isLoading) return <Overlay text="Logging In"/>
  return (
   <div className="row text-white pt-5">
    <div className="col-12 col-lg-6 mx-auto">
      <form onSubmit={submit} className="mx-auto">
        <h2 className="mb-4 text-center">Register</h2>
        <div className="row gy-4">
          <div className="col-12">
            <label className="form-label">Email</label>
            <input
              onChange={onFormChange} 
              value={form.email}
              name="email"
              type="email"
              className="form-control"
              placeholder="Aamir@gmail.com"
            />
          </div>
          <div className="col-12">
            <label className="form-label">Password</label>
            <input
              onChange={() => {}}
              value={""}
              name="password"
              type="password"
              className="form-control"
              placeholder="aamir123"
            /> 
          </div>
          <div className="col-12">
            <label className="form-label">Confirm Password</label>
            <input
              onChange={() => {}}
              value={""}
              name="confirm"
              type="password"
              className="form-control"
              placeholder="aamir123"
            /> 
          </div>
        </div>
        <span 
          onClick={()=> nav("/loogin")}
          className="text-success my-3 h6 d-block text-center pointer"> Already registered? Login here
          </span>
          <button 
              disabled={(form.password !== form.confirm) || (form.password.length < 5) || isLoading} 
              type="submit" className="w-100 btn btn-success mt-3"> Submit
          </button>        
      </form>
    </div>
   </div>
  )
}