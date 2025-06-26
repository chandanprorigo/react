import { useRef, useState } from "react"

export default function SearchableList({items, itemKeyFn, children}) {
    const lastChange = useRef();
    const [searchTerm, setSearchTerm] = useState('');

    const searchResult = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()));

    // Debouncing is a programming technique used to limit how often a function is executed, 
    // especially in response to high-frequency events like keydown, scroll, resize, or input.
    function handleChange (event) {
        if(lastChange.current) {
            clearTimeout(lastChange.current);
        }
        lastChange.current = setTimeout(() => {
            lastChange.current = null;
             setSearchTerm(event.target.value);
        },500);
    } 
  return (
    <div className="searchable-list">
        <input type="search" placeholder="Search" onChange={handleChange}></input>
        <ul>
            {searchResult.map((item) =>(
                <li key={itemKeyFn(item)}>{children(item)}</li>
            )
            )}
        </ul>

    </div>
  )
}