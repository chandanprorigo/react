import { useState } from "react"
import "./Todos.scss" 

type TodoProps = {
  name: string
}

const Todos: React.FC<TodoProps> = ({name}: TodoProps) => {
    const [count, setCount] = useState<number>(0)
    return (
        <div className="todos" style={{display: "flex", justifyContent: "center"}}>
            <h1>Hello Todos</h1>
            <button type="button">Add {name}</button>
        </div>
    );
}

export default Todos;