//Typescript has special types that may not refer to any specific type of data.

//[any] is a type that disables type checking and effectively allows all types to be used.

let v: any = true;
v = 'string' //no error as it can be "any" type
Math.rounc(v); //no error as it can be "any" type

//any can be a useful way to get past errors since it disables type checking, but TypeScript will not be able provide type safety, and tools which rely on type data, such as auto completion, will not work. Remember, it should be avoided at "any" cost...