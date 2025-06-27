import { FC } from "react"
import Todo from "../models/todo";
import classes from './TodoComponent.module.css'
import newTodoClasses from './NewTodo.module.css'

const TodoComponent: FC<{todo?: Todo, item?: string,  onRemoveTodo?: () => void}> = ({todo, item, onRemoveTodo}) => {
  return (
    <>
      {item ? (
        <li className={classes.item}>{item}</li>
      ) : (
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
      )}
    </>
  );
}
export default TodoComponent;