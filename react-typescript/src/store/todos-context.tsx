import { createContext, FC, useState } from "react";
import Todo from "../models/todo";

type TodosContextType = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void,
} 

const intialTodos = {
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
}

export const TodosContext = createContext<TodosContextType>(intialTodos);

const TodosContextProvider: FC = ({children}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }

  return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>;
};

export default TodosContextProvider;