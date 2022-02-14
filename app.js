
let i = 0;

while (i < 10) {
  console.log(`num ${i}`);
  i++
}



//DO WHILE LOOP

let b = 0;

do {
  console.log('testing' + b);
  b++
}
while (b < 3);


//Loop Through Arrays

const cars = ['ford', 'chevy', 'honda', 'toyota'];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

//For Each Loop w/ Array
cars.forEach(function(car){
  console.log(car);
});


//For Each Loop w/ Array - w. Value & Index Params
cars.forEach(function(car, index){
  console.log(`${index} : ${car}`);
});

//For Each Loop w/ Array - w. Value & Index & Array Params
cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
});



//MAP
//Loop through an array of objects
const users = [
  {id:1, name:'john'},
  {id:2, name:'Sue'},
  {id:3, name:'Sam'},
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);


//FOR IN LOOP
const newUser = {
  first: 'John',
  last: 'Samson',
  age: 50
};

for(let x in newUser){
  console.log(`${x} : ${newUser[x]}`);
}