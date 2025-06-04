//An enum is a special "class" that represents a group of constants (unchangeable variables).

//Enums come in two flavors [string] and [numeric]. Lets start with numeric.

//Numeric Enums - Default
//By default, enums will initialize the first value to 0 and add 1 to each additional value:

enum CardinalDirections = {
    North, 
    East,
    South,
    West
}

let currentDirection =
CardinalDirections.North;
//logs[0]
console.log(currentDirection);
//throws error as 'North' is not a valid enum
currentDirection = 'North';
//Error: "North" is not assignable to type 'CardinalDirections'.

//Numeric Enums - Initialized
//You can set the value of the first numeric enum and have it auto increment from that:
enum CardinalDirections {
    North = 1,
    East,
    South,
    West
}
//logs 1
console.log(CardinalDirections.North);
//logs 4
console.log(CardinalDirections.West);