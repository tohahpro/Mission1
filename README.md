#What are some differences between interfaces and types in TypeScript?
Interfaces and types Both help define the shape of objects, but they have some key distinctions.

Basic Syntax of Type-
type User1 = {
name: string;
age: number;
};

Basic Syntax of Interface-
interface User2{
name: string;
age: number;
}

Type represent objects, primitives, unions, Intersection.
Types use intersection (&) to combine properties.
for example -
type UserWithRoll= User1 & {role:string};

Interfaces can extend other interfaces
for example -
interface UserWithRoll_ extends User2{
role: string
}

Type Supports Tuples. But Interfaces cannot represent unions or tuples directly.

Interfaces are better for:
Extending (extends)
Class implementations (implements)

Types are better for:
Unions (|) and intersections (&)
Tuples, primitives, and complex types.



# What is type inference in TypeScript? Why is it helpful?

Type inference is a feature of programming languages that allows the compiler to automatically determine the type of a variable based on its context. This can be helpful for making code more easy to read, as well as for preventing errors.

let age: number = 25;
let name: string = "MD";

TypeScript sees 25 and assigns number to age. Similarly, "MD" is inferred as string.

function add(a: number, b: number): number {
return a + b;
}
a and b are numbers, the return result (a + b) must also be a number.

To create something, you first declare the properties of it in an interface, and then call the interface to add the properties. Adding a property to an interface makes it easier for us.

interface User{
name: string;
age: number;

}

const user1: User={
name:'Md',
Age: 23
}

This is why the interface in TapeScript helps.
