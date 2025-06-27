import { FC } from "react"
import Todo from "../models/todo"
import TodoComponent from "./Todo"
import classes from './Todos.module.css'
import todoClasses from './TodoComponent.module.css'

const Todos: FC<{items: string[], todos: Todo[], onRemoveTodo: (id: string) => void}> = ({items, todos,onRemoveTodo}) => {
  return (
    <ul className={classes.todos}>
      {/* Manual list render */}
      <li className={todoClasses.item}>Learn react</li>
      <li className={todoClasses.item}>Learn Typescript</li>

      {/* munual list render by user defined list */}
      {items.map((item, index) => (
        // <li key={index}>{item}</li>
        <TodoComponent
          item={item}
          key={index.toString()}
          onRemoveTodo={onRemoveTodo.bind(null, index.toString())}
        />
      ))}

      {/* Added todos ny add todo components */}
      {todos.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <TodoComponent
          todo={item}
          key={item.id}
          onRemoveTodo={onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
}
export default Todos