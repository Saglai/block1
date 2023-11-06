// creating basic types
export type Student = {
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
export type yesNoType = 'yes' | 'no';
export type statusType = 'Pending' | 'Started' | 'Finished';
const isMan: yesNoType = 'yes';
const isFinish: statusType = 'Pending';

// Object
export type food = {
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
export type Person = {
    gender: 'man' | 'woman',
    nationality: string,
    additional: null
}

export type Child = {
    info: Person,
    age: number
}

//Array
type stringArr = string[];

const arr1: stringArr = ['a', 'b'];

// function expression
type arrowFn = (name: string) => void
