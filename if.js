// // if(something){
// // do something
// // } else {
// //   do someting else
// // }


const id = '100';

// //EQUAL TO
// if (id == 1200){
//   console.log('CORRECT');
// } else {
//   console.log("INCORRECT");
// }

// //NOT EQUAL TO (Same Value)
// if (id != 101){
//   console.log('CORRECT');
// } else {
//   console.log("INCORRECT");
// }

// //**EQUAL TO VALUE & TYPE
// if (id === 100){
//   console.log('CORRECT');
// } else {
//   console.log("INCORRECT");
// }

// //returns incorrect because its not a string. 

// //NOT EQUAL TO VALUE & TYPE
// if (id !== 100){
//   console.log('CORRECT');
// } else {
//   console.log("INCORRECT");
// }


// //Adding Template Litral to If Statement to check if ID is assigned (don't verify like this):
// if (id) {
//   console.log(`The ID is ${id}`)
// } else {
//   console.log('No id');
// } //Returns The ID is 100, or undefined if id is not defined.

// //**Verify Definition with typeOf & Template Literals like this;

// if (typeof id !== 'undefined') {
//   console.log(`ID is ${id}`);
// } else {
//   console.log("No ID");
// }

//testing whether the type of variable id is undefined or not. 


//GREATER THAN OR LESS THAN (<) or Greater than / equal to (<=)

if (id > 200) {
  console.log('YES');
} else {
  console.log('NO');
}


//ELSE IF

const color = 'blue';

if (color === 'red'){
  console.log("color is red");
} else if (color === 'blue') {
  console.log("color is blue");
} else {
  console.log("color is not red or blue");
}


//LOGICAL OPERATORS 

//&&
const name = "Steve";
const age = 75;

if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenage`);
} else {
  console.log(`${name} is an adult`);
}

//OR ||
if (age < 16 || age > 65){
  console.log(`${name} cannot run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

//TERNARY OPERATOR
id === '100' ? console.log("Yes") : console.log("No");
//Better
console.log(id === '100' ? "Yes" : "No");

//WITHOUT BRACES

if (id === 100) 
  console.log('Yes');
else
  console.log('No');