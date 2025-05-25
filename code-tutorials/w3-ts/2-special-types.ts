//Typescript has special types that may not refer to any specific type of data.

//[any] is a type that disables type checking and effectively allows all types to be used.

let v: any = true;
v = 'string' //no error as it can be "any" type
Math.rounc(v); //no error as it can be "any" type

//any can be a useful way to get past errors since it disables type checking, but TypeScript will not be able provide type safety, and tools which rely on type data, such as auto completion, will not work. Remember, it should be avoided at "any" cost...

//Type: Unknown
//[unknown] is a similar, but safer alternative to [any].

//Typescript will prevent unknown types from being used, as shown in the below example: (on site)

//unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.

//Casting is when we use the "as" keyword to say property or variable is of the casted type.