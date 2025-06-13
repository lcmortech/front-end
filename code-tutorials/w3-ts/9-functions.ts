//TypeScript Functions
//TypeScript has a specific syntax for typing function parameters and return values.

//Return Type
//The type of the value returned by the function can be explicitly defined.

//the `: number` here specifies that this function returns a number:
function getTime(): number {
    return new Date().getTime();
}
//If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.