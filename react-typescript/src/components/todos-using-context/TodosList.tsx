import { FC, useContext } from "react"
import classes from './Todos.module.css'
import { TodosContext } from "../../store/todos-context"
import TodoItem from "./TodoItem";

const TodosList: FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {/* Added todos using context api */}
      {todosCtx.items.map((item) => (
        <TodoItem
          todo={item}
          key={item.id}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
}
export default TodosList