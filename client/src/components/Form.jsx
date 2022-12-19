import { useState } from "react"
import { useSelector } from "react-redux"

export default function Form () {


  const [text, setText] = useState("")
  const { isLoading } = useSelector(s => s.todos)


  return (
    <form onClick={(e) => e.preventDefault()}>
        <div className="input-group mb-3">
            <input 
                type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="form-control rounded-0" 
                placeholder="Add Todo Here"
                disabled={isLoading && (text.length > 0)}
            />
            <button 
                onClick={() => {}} 
                disabled={text.length === 0}
                className="btn bg-success text-white rounded-0 fw-bold"
            >
                Submit
            </button>
        </div>
        <hr/>
    </form>
)
}