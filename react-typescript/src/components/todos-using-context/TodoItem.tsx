import { FC } from "react"
import classes from './TodoComponent.module.css'
import newTodoClasses from './NewTodo.module.css'
import Todo from "../../models/todo";

const TodoItem: FC<{todo?: Todo, item?: string,  onRemoveTodo?: () => void}> = ({todo, onRemoveTodo}) => {
  return (
    <>
        <li className={classes.item}>
          {todo?.text}
          <p className={newTodoClasses.form}>
            <button
              onClick={onRemoveTodo}
              className={`${newTodoClasses.button}`}
            >
              remove
            </button>
          </p>
        </li>
    </>
  );
}
export default TodoItem;