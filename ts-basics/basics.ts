// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 15;

let userName: string | string[];

userName = 'Nik';

let isInstructor: boolean;

isInstructor = true;

// More comples types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: {
   name: string;
   age: number;
};

person = {
    name: 'Nik',
    age: 56
};

let people: {
    name: string;
    age: number;
}[];

// Type inference

let course: string | number = 'React';

course = 78;

// Aliases

type Person = {
    name: string;
    age: number;
};

// let person : Person;

// let people: Person[];

// Functions & types

function add(a: number, b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3 ]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

//updatedArray[0].split('');
