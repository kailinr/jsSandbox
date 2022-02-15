// Global Scope
var a = 1;
let b = 2;
const c = 3;

// //Function Scope
function test() {
  var a = 4;
  let b = 5;
  const c = 6;

  console.log('Function Scope: ', a, b, c);
}
test();

if(true) {
  //Block Scope
  var a = 7;
  let b = 8;
  const c = 9;
  console.log('If Block Scope: ', a, b, c);

}

//Loop Scope
for (let a = 0; a < 10; a++){
  console.log(`Loop ${a}`);
}

//Global scope using let inside for loop returns 7. With var, it returns 10 because it was replaced 

console.log('Global Scope: ', a, b, c);