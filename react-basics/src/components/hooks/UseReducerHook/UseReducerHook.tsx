import { useReducer, ChangeEvent } from "react";
import { reducer, ActionTypes, State } from "./reducer";

export const initialState: State = {
  count: 0,
  user: {
    name: "Prorigo",
    age: 30,
  },
};

const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer,initialState);

  const handleIncrement = (value: number) => {
    dispatch({ type: ActionTypes.INCREMENT, payload: value });
  };

  const handleDecrement = (value: number) => {
    dispatch({ type: ActionTypes.DECREMENT, payload: value });
  };

  const handleReset = () => {
    dispatch({ type: ActionTypes.RESET });
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ActionTypes.UPDATE_NAME, payload: e.target.value });
  };

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ActionTypes.UPDATE_AGE, payload: Number(e.target.value) });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>useReducer hook demo with Enums</h2>

      <p>Count: {state.count}</p>
      <button onClick={() => handleDecrement(5)}>- Decrement</button>
      <button onClick={() => handleIncrement(5)} style={{ marginLeft: "1rem" }}>
        + Increment
      </button>
      <button onClick={handleReset} style={{ marginLeft: "1rem" }}>
        Reset Count
      </button>

      <hr />

      <h3>User Info</h3>
      <p>Name: {state.user.name}</p>
      <p>Age: {state.user.age}</p>

      <input
        type="text"
        value={state.user.name}
        onChange={handleNameChange}
        placeholder="Update name"
        style={{ display: "block", marginBottom: "0.5rem" }}
      />

      <input
        type="number"
        value={state.user.age}
        onChange={handleAgeChange}
        placeholder="Update age"
      />
    </div>
  );
};

export default UseReducerDemo;
