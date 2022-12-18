


export default function Login () {
  return (
   <div className="row text-white pt-5">
    <div className="col-12 col-lg-6 mx-auto">
      <form>
        <h2 className="mb-4 text-center">Login</h2>
        <div className="row gy-4">
          <div className="col-12">
            <label className="form-label">Email</label>
            <input
              onChange={() => {}}
              value={""}
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
        </div>
        <span className="text-success my-3 h6 d-block text-center pointer">Register Here</span>
        <button type="submit" className="w-100 btn btn-success mt-3"> Login</button>         
      </form>
    </div>
   </div>
  )
}