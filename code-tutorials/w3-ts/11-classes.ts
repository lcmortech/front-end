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
//protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below.
class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName()); // person.name isn't accessible from outside the class since it's private
//The this keyword in a class usually refers to the instance of the class. Read more about this here.

//The this keyword in a class usually refers to the instance of the class. Read more about this here.

//Parameter Properties
//TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.

class Person {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName());

//Readonly
//Similar to arrays, the readonly keyword can prevent class members from being changed.
class Person {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName());

