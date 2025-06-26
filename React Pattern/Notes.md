# React Patterns Explained

This guide covers some useful design patterns in React, including:

- Compound Component
- Props Renderer
- Debouncing

---

## What is a Compound Component?

A **Compound Component** is a React pattern where components are designed to work together and share internal state implicitly using React Context. This allows for a flexible and expressive API for consumers.

### 🔧 Example

```jsx
// Tabs.js
import { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

export function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

export function TabList({ children }) {
  return <div className="tab-list">{children}</div>;
}

export function Tab({ index, children }) {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = index === activeIndex;
  return (
    <button
      style={{ fontWeight: isActive ? 'bold' : 'normal' }}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </button>
  );
}

export function TabPanel({ index, children }) {
  const { activeIndex } = useContext(TabsContext);
  return activeIndex === index ? <div className="tab-panel">{children}</div> : null;
}
```

```js
// Usage
import { Tabs, TabList, Tab, TabPanel } from './Tabs';

<Tabs>
  <TabList>
    <Tab index={0}>Home</Tab>
    <Tab index={1}>Profile</Tab>
  </TabList>
  <TabPanel index={0}>Welcome to Home</TabPanel>
  <TabPanel index={1}>This is your Profile</TabPanel>
</Tabs>
```

## Props Renderer (Render Props)

A Props Renderer (or render prop) is a pattern in React where a component receives a function as a prop, and calls it to determine what to render.

This helps with code reuse and custom rendering logic.

```js
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData);
  }, [url]);

  return render(data);
}
```

```js
<DataFetcher url="/api/user" render={(data) => (
  data ? <div>{data.name}</div> : <p>Loading...</p>
)} />
```

## Debouncing

Debouncing is a technique that delays the execution of a function until after a specified amount of time has passed since the last time the event was triggered. It’s commonly used to optimize performance in high-frequency events like typing, scrolling, or resizing.

```js
import { useRef, useState } from 'react';

function SearchInput({ onSearch }) {
  const timeoutRef = useRef(null);
  const [input, setInput] = useState('');

  function handleChange(e) {
    const value = e.target.value;
    setInput(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      onSearch(value);
    }, 500);
  }

  return <input type="text" value={input} onChange={handleChange} placeholder="Search..." />;
}
```

```js
<SearchInput onSearch={(value) => console.log('Searching for:', value)} />
```
