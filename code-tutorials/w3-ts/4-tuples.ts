//A tuple is a typed array with a pre-defined length and types for each index
//Tuples are great bc they allow each element in the array to be a known type of value.
//To define a tuple, specify the type of each element in the array:

//define our tuple
let ourTuple: [number, boolean, string];

//initialize correctly
ourTuple = [5, false, 'Coding G was here'];

//Error (wrong order)
let ourTuple: [number, boolean, string];
//initialized incorrectly throws error
ourTuple = [false, 'Coding G was mistaken', 5];

//A good practice is to make your tuple [readonly]
//Tuples only have strongly defined types for the initial values
//define our tuple
let ourTuple: [number, boolean, string];
//initialize correctly
ourTuple = [5, false, "Coding G was here"]
//we have no type safety
ourTuple.push('Something wrong')
console.log(ourTuple);

const ourReadOnlyTuple: readonly [number, boolean, string] = [5, true, "The Real Coding G"]
//throws error
ourReadOnlyTuple.push("Coding G took a day off")

//Named Tuples
//"Named tuples" Allow us to provide context for our values at each index