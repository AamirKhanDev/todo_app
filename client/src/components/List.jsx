import Icon from "./Icon"
import TodoText from "./ToDoText"
import { useSelector } from "react-redux"

export default function List () {
  const { isLoading, todos } = useSelector (state=>state.todos)


  return (
    <ul id="list" className="list-group rounded-0 pb-3">
        {todos.map((todo, index) => (
            <li 
                key={todo._id} 
                className="list-group-item d-flex justify-content-between align-items-center"
            >
                <TodoText todo={todo}/>
                <div>
                    <Icon 
                        onClick={() => {}} 
                        type="pencil-square" 
                        color="warning" 
                        classes={["me-3"]} 
                    />
                    <Icon 
                        onClick={() => {}} 
                        type="trash" 
                        color="danger" 
                    />
                </div>
            </li>
        ))}
    </ul>
)
}