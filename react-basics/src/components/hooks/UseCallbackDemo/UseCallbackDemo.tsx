import { useState, useCallback, useEffect, useMemo } from "react";
import ListItem from "./ListItem";

export const UseCallbackDemo = () => {
  const [items, setItems] = useState(["apple", "banana", "cherry"]);
  const [query, setQuery] = useState("");


  // const handleRemove = (item: string) => {
  //   setItems(prev => prev.filter(i => i !== item));
  // };

  const handleRemove = useCallback((item: string) => {
    setItems(prev => prev.filter(i => i !== item));
  }, []);

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h2>useCallback Demo</h2>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search items..."
      />
      <div style={{ marginTop: "1rem" }}>
        {filteredItems.map(item => (
          <ListItem key={item} item={item} onRemove={handleRemove} />
        ))}
        
      </div>
    </div>
  );
};
