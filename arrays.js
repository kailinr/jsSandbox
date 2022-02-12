//Creating Arrays
const numbers = [43,56,33,23,44,36,5];
//with constructor
const numbers2 = new Array(22,43,33,76,54);
const fruit = ['apple', 'banana', 'orange', 'pear'];
//mixed type array
const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

//Get Array Length
val = numbers.length;
//**Check if is array using Array object and .isArray method
val = Array.isArray(numbers); //returns true
//Get single array value
val = numbers[3]; //returns 4th value in the numbers array
val = numbers[0]; //returns 1st value

//Insert value in Array (they aren't immutable)
numbers[2] = 100; //inserts 100 in 3rd position

//Find index of Value
val = numbers.indexOf(36); //returns 5, the 6th # from left

//MUTATING ARRAYS

//add to end
numbers.push(250);

//add to front
numbers.unshift(120);

//remove 1 from end
numbers.pop();

//remove 1 from front
numbers.shift();

//Splice Values off [remove from a given position] 
//(where to start, where to end)
numbers.splice(1,1)  //removes 1

//Reverse
numbers.reverse();


//Concatenate Arrays

val = numbers.concat(numbers2);  //adds numbers and numbers2 array together.

//Sorting Arrays
val = fruit.sort(); //alphabetical order
val = numbers.sort();  //but not in ascending order so fix with:

//Use the "Compare Function" to Sort in Ascending Order:
val = numbers.sort(function(x,y){
  return x - y;
});

//Use the "Compare Function" to Sort in Descending Order:
val = numbers.sort(function(x,y){
  return y - x;
});


//FIND - create a function that finds the first number under 50
function under50(num){
  return num < 50;
}
val = numbers.find(under50);

//Find first number over 50
function over50(num){
  return num > 50;
}
val = numbers.find(over50);




console.log(numbers);
console.log(val);