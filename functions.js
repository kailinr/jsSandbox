//Function Declarations

function greet(){
  //anything in here is function scrope. Nothing return when saved until the function is called outside of this scope. 
  console.log('Hello');
}
greet();  //THIS calls the function, and will return "hello" in console.


//Functional Declarations (typical)

function greet2(){
  return 'Hello';
}
console.log(greet2()); //wrap function in a log, returns 'Hello'


//FUNCTION PARAMETERS / ARGUMENTS:

function callName(firstName) {
  return 'Hello ' + firstName;
}
console.log(callName('John')); //returns 'Hello John'


//2 PARAMETERS
function callName(firstName, lastName) {
  return 'Hello ' + firstName + ' ' + lastName;
}
console.log(callName('John', "Doe")); //returns 'Hello John Doe'
//note, if you do not pass in both variables when calling the function in log, you'll get undefined


//2 PARAMS with DEFAULTS [OLD ES5]

function greetYa(fN, lN) {
  if (typeof fN === 'undefined'){fN = 'Kay'}
  if (typeof lN === 'undefined'){lN = "Saggot"}
  return fN + ' ' + lN
}
console.log(greetYa());


//2 PARAMS WITH DEFAULTS NEW - ES6

function greetYa(fN = "Kay", lN = "Saggot") {
  return fN + ' ' + lN
}
console.log(greetYa());




//FUNCTION EXPRESSIONS:

const whoo = function(x){
    return x*x;
}
console.log(whoo(8)); //returns 64

//with a Default value of 3
const boo = function(x = 3){
  return x*x;
}
console.log(boo()); //returns 9


//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFES

(function(){
  console.log('YOUR IFFE RAN');
})();

//IFE with parameters
(function(newName){
  console.log('YOUR IFFE RAN'+ newName);
})(" bob");


//PROPERTY METHODS:
//object
const todo = {
  add: function(){
    console.log('Add todo');
  }
}
todo.add();

//Object with 2 functions Edit
const todo2 = {
  add: function(){
    console.log('Add todo');
  },
  edit: function(id){
    console.log(`edit todo's id number ${id}`);
  }
}
todo2.add();
todo2.edit(22);

//can define functions from object outside of that layout
todo.delete = function(){
  console.log('delete todo');
}
todo.delete();