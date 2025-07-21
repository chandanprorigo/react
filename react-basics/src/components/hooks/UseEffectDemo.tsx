import React, { useEffect, useState } from 'react';
import { fetchTodos } from '../../utils/functions';
import { Todos, Todo } from '../../utils/Types';



const UseEffectDemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<Todos>();

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const todos = await fetchTodos();
        console.log(todos)
        setData(todos);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
    fetchData();

    return (() => controller.abort())

  }, []);

  useEffect(() => {

  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>useEffect Demo</h1>
      <p>Count: {count}</p>
      <p>Fetched Data Title: {data?.title || 'Loading...'}</p>
    </div>
  );
};

export default UseEffectDemo;
