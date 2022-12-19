import Icon from "./Icon"
import TodoText from "./ToDoText"

export default function List () {
  return (
    <ul id="list" className="list-group rounded-0 pb-3">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <TodoText/>
        <div>
          <Icon
            onClick={() =>{}}
            type="pencil-square"
            color="warning"
            class={("me-3")}
          />
          <Icon
            onClick={() =>{}}
            type="trash"
            color="danger"
          />
        </div>
      </li>
    </ul>
  )
}