import { FC, FormEvent, useRef } from "react";
import classes from './NewTodo.module.css'

const NewTodo: FC<{onAddTodo: (text: string) => void}> = ({onAddTodo}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        const enteredText = inputRef.current?.value;

        if (enteredText?.trim().length === 0) {
            return;
        }
        if(enteredText) onAddTodo(enteredText);
    }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text" className={classes.label}></label>
        <input type="text" id="text" ref={inputRef}  className={classes.input}/>
        <button className={classes.button}>Add Todo</button>
    </form>
  );
};

export default NewTodo;
