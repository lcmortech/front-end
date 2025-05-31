//Typescript has a specific syntax for typing objects 

const car: {type: string, model: string, year: number} = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
//Object types like this can also be written separately, and even be reused, look at interfaces for more details

//Type Inference
//TypeScript can infer the types of properties based on thier values
const car = {
    type: "Toyota",
};
car.type = "Ford"; //no error
car.type = 2; Error: Type 'number'