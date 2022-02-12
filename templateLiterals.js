const userName = "Kailin";
const age = 31;
const job = "Developer";
const city = 'Miami';

let html;

//Without Template String:
html = '<ul><li>Name: ' + name + '</li></ul>';  

//With Template Literals / Template Strings (es6)

function hello(){
  return 'hello';
}

html = `
  <ul>
    <li>Name: ${userName}</li>
    <li>Age: ${age} </li>
    <li> ${job} </li>
    <li> ${city}</li>
    <li> ${2 + 2} </li>
    <li> ${hello()} </li>
    <li> ${age > 30 ? "Old" : "Young"} </li>
  </ul>
`;



document.body.innerHTML = html;