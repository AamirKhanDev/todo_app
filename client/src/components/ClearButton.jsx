import { useSelector } from "react-redux"

export default function ClearButton () {

  const { todos  } = useSelector(state => state.todos)

  const clearTodos = () => {
    if (window.confirm("Delete All Todos?")) {

    }
  }

  if (todos.length === 0) return <></>
  return (
    <button 
      onClick={clearTodos}
      className="btn btn-outline-success rounded-1 text-light">
      Clear Items
    </button>
  )
}