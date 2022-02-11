let val;

//Convert Number to String
val = String(3);
val = String(4+4);

//Convert Boolean to String
val = String(false);

//Convert Date to String
val = String(new Date());

//Convert Array to String
val = String([1,2,3,4]);


// Using toString method:
val = (12).toString(); //Number to String
val = (true).toString(); //Booean to String

//Convert a String to Number
val = Number('5'); //returns 5

//Convert Boolean to Number
val = Number(true); //returns 1
val = Number(false); //returns 0
val = Number(null); //returns 0

//Convert String to Number
val = Number("hello"); //returns NaN. or not a number

val = parseInt('100'); //returns 100
val = parseInt('100.30'); //also returns 100 because int returns integers.
val = parseFloat('100.20'); //returns 100.20

const x = "5"
const y = 6
const sum = x+y

console.log(sum); //returns 56
console.log(typeof sum); //returns string

//if you need to convert the string back to a number:

const sum2 = Number(x+y)

console.log(typeof sum2); //returns string


// //Output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length); //length for strings only
// console.log(val.toFixed(4));