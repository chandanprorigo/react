//primitives type

let age: number;

let username: string;

let isStudent: boolean;

//complex types
let hobies:string[];

interface Person  {
    name: string,
    age: number
}

let person: Person  = {
    name: 'name',
    age: 32
}

// asign same type i.e Person to people array
let people: Person[]

// type inference
let course = 'React - Typescript'

// bellow code give error because above typescript recognosezed as string and we are assigning number 
//course = 32;

// combining two object type

let course2: string | number = 'react typescript union';
course2 = 32;

function add(a: number, b: number) {
  return a + b;
}

// Generics : 
// Generics are a powerful feature in TypeScript that allow you to create reusable,
// type-safe components or functions that can work with any data type, while still maintaining type safety.

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, 10);
// output: [10,1,2,3]
const stringArray = insertAtBeginning(['a','b','c'], 'd');
// output : ['d','a','b','c']

//updatedArray[0].split('');
// error : Property 'split' does not exist on type 'number'.
stringArray[0].split('');
// No error : as stringArray[0] = 'd' which is string and split will only work in string.

