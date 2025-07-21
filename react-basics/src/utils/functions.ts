export function calculateTotalPrice(items: number[]) {
  return items.reduce((total, item) => total + item, 0);
}

export async function fetchTodos () {
   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
   const todos = await res.json();
   return todos
}
