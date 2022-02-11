//PRIMITIVE Data Types: 

//String
const name = 'John Doe';

//Number
const age = 45;

//Boolean
const hasKids = false;

//Null
const car = null;
  //returns "object" when in typeof but this is a bug. it's a primitive, not a reference data type.

  //Undefined
let test = undefined;

//Symbol
const sym = Symbol();


//REFERENCE Data Types:

//Array
const hobbies = ['coding', "driving", "laughing"]

//Object Literal
const address = {
    city: 'Boston',
    state: 'MA',
}

//Date
const today = new Date();
//also returns as "object"

console.log(today);
console.log(typeof today);
console.log(typeof address);

