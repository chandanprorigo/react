import { FC, FormEvent, useContext, useRef } from "react";
import classes from './NewTodo.module.css'
import { TodosContext } from "../../store/todos-context";

const AddNewTodo: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const todoCtx = useContext(TodosContext);
    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        const enteredText = inputRef.current?.value;

        if (enteredText?.trim().length === 0) {
            return;
        }
        if(enteredText) todoCtx.addTodo(enteredText);
    }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
        <br />
        <h1>Using Context api</h1>
        <label htmlFor="text" className={classes.label}></label>
        <input type="text" id="text" ref={inputRef}  className={classes.input}/>
        <button className={classes.button}>Add Todo</button>
    </form>
  );
};

export default AddNewTodo;