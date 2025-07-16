//TypeScript Basic Generics

//Generics allow creating "type variables" which can be used to create classes, functions, & type aliases that don't need to explicitly define the types that they use. 

//Generics makes it easier to write reusable code.
//push test
//fixing github push bug

//Functions
//Generics with functions help make more generalized methods which more accurately represent the types used and returned.
function createPaair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); //['hello', 42]

//TypeScript can also infer the type of the generic parameter from the function parameters.

//Classes


