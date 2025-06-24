//TypeScript adds types and visibility modifiers to JavaScript classes.

//*Learn more about JavaScript classes here.

//Members: Types
//The members of a class (properties & methods) are typed using type annotations, similar to variables.
class Person {
    name: string;
  }
  
  const person = new Person();
  person.name = "Jane";

//Members: Visibility
//Class members also be given special modifiers which affect visibility.

//There are three main visibility modifiers in TypeScript.

//public - (default) allows access to the class member from anywhere
//private - only allows access to the class member from within the class
//protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below