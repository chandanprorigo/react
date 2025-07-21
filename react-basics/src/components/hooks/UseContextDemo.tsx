import { ChangeEvent } from "react";
import { useUserContext } from "../context/UserContext";

const UseContextDemo = () => {
  const {
    state,
    increment,
    decrement,
    reset,
    updateName,
    updateAge,
  } = useUserContext();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateName(e.target.value);
  };

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateAge(Number(e.target.value));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>useReducer with Context + Actions</h2>

      <p>Count: {state.count}</p>
      <button onClick={() => decrement(5)}>- Decrement</button>
      <button onClick={() => increment(5)} style={{ marginLeft: "1rem" }}>
        + Increment
      </button>
      <button onClick={reset} style={{ marginLeft: "1rem" }}>
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

export default UseContextDemo;
