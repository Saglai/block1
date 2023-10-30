// creating basic types
type Student = {
    name: string,
    age: number
}

const newStudent: Student = {
    name: 'Oleg',
    age: 54
}

// Type Aliases for primitive types

type numberCustom = number;
const a: numberCustom = 1;
const b: numberCustom = 2;
const c = a + b;

// Type Aliases for union types

type numString = number | string;
type yesNoType = 'yes' | 'no';
type statusType = 'Pending' | 'Started' | 'Finished';
const isMan: yesNoType = 'yes';
const isFinish: statusType = 'Pending';

// Object
type food = {
    type: string,
    price?: number,
    category?: string
}

const choko: food  = {
    type: 'sweet',
    category: 'expensive',
    price: 23
}

// Nested
type Person = {
    gender: 'man' | 'woman',
    nationality: string,
}

type Child = {
    info: Person,
    age: number
}

//Array
type stringArr = string[];

const arr1: stringArr = ['a', 'b'];

// function expression
type arrowFn = (name: string) => void
