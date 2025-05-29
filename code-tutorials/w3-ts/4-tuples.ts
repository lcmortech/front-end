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
