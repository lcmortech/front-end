//TS has a special syntax for typing arrays

const names: string[] = [];
names.push("Dylan")

//Readonly
//[readonly] keyword can prevent arrays from being changed.

const names: readonly string[] = ["Dylan"]
names.push("Jack") //Throws an error, property push does not exist on type 'readonly string[]'

//Type Inference
//TS can infer the type of an array if it has values

const numbers = [1,2,3] //inferred to type number[]
numbers.push(4) //No error
numbers.push("2")//Error
let head: number = numbers[0] //No error