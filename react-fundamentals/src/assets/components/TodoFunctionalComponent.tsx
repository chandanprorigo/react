import { useEffect, useState } from "react";

const FunctionalLifecycleDemo = () => {
  const [count, setCount] = useState(0);

  // Mimics: componentDidMount
  useEffect(() => {
    console.log("useEffect - componentDidMount");

    // Mimics: componentWillUnmount
    return () => {
      console.log("Cleanup - componentWillUnmount");
    };
  }, []);

  // Mimics: componentDidUpdate
  useEffect(() => {
    if (count !== 0) {
      console.log("useEffect - componentDidUpdate (count changed)");
    }
  }, [count]);

  return (
    <div style={{ border: "2px solid blue", padding: "16px", marginTop: "10px" }}>
      <h2>Functional Component Lifecycle</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

// Parent component to mount/unmount FunctionalLifecycleDemo
const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>React Functional Lifecycle Example</h1>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Unmount" : "Mount"} Component
      </button>
      {show && <FunctionalLifecycleDemo />}
    </div>
  );
};

export default App;
