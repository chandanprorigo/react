import React, { useState, ChangeEvent } from 'react';

type User = {
  name: string;
  age: number;
}

const initialNumbers: number[] = [1,2,3];

const UseStateDemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [user, setUser] = useState<User>({ name: '', age: 0 });
  const [numbers, setNumbers] = useState<number[]>(initialNumbers);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleToggleVisibility = () => {
    setIsVisible(prev => !prev);
    // setIsVisible(true);
  };

  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(prev => ({ ...prev, name: e.target.value }));
    // setUser({...user, name: e.target.value});
  };

  const handleUserAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(prev => ({ ...prev, age: +e.target.value }));
  }

  const addNewNumbers = () => {
    setNumbers(prev => [...prev, (prev[prev.length -1]) +1]);
    // setNumbers([...numbers, (numbers[numbers.length -1]) +1]);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>useState Hook - All Common Use Cases</h2>

      <div>
        <h4>Counter</h4>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
      </div>

      <div>
        <h4>Controlled Input (String)</h4>
        <input
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
        <p>Hello, {name}</p>
      </div>

      <div>
        <h4>Toggle Visibility</h4>
        <button onClick={handleToggleVisibility}>Toggle</button>
        {isVisible && <p>This text is visible.</p>}
      </div>

      <div>
        <h4>Update Object State</h4>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={handleUserNameChange}
        />
         <input
          type="text"
          placeholder="Age"
          value={user.age}
          onChange={handleUserAgeChange}
        />
        <p>
          User: {user.name}, Age: {user.age}
        </p>
      </div>
      <div>
        <h4>Update Item State</h4>
        <ul>
          {numbers.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </ul>
        <button onClick={addNewNumbers}>Add New Numbers</button>
      </div>
    </div>
  );
};

export default UseStateDemo;
