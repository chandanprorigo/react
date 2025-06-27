import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import TodosContextProvider from './store/todos-context';
import AddNewTodo from './components/todos-using-context/AddNewTodo';
import TodosList from './components/todos-using-context/TodosList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const langList = ["React", "TypeScript"]
  // const todos = [
  //   new Todo('Learn csharp'),
  //   new Todo('Learn webapi')
  // ]

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos(prev => {
      return prev.concat(newTodo);
    })
  };

  const removeTodoHandler =(todoId: string) =>{
    setTodos(prevTodos => {return prevTodos.filter(todo => todo.id !==todoId)})
  }

  return (
   <TodosContextProvider>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={langList} todos={todos} onRemoveTodo={removeTodoHandler}/>
        
       
        <AddNewTodo /> 
        <TodosList />
     
     </TodosContextProvider>
  );
}

export default App;
