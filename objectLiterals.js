//Object Oriented Programming means conding with constructors, prototypes, other reference data types.

const person = {
  firstName: "Steve",
  lastName: "Saggon",
  age: 33,
  email: 'lemon@gmail.com',
  hobbies: ['music', 'nfts'],
  address: {
      street: '233 Last Lane',
      city: 'Boop',
      state: 'Bippity',
  },
  getBirthYear: function(){
    return 1986 - this.age; 
  }
}

let val;

val = person;

//Get Specific Values from an Objects:

val = person.firstName;  //returns Steve - best way
val = person['firstName']; //returns Steve
val = person.age; //33
val = person.hobbies; //(2) ['music', 'nfts']
val = person.hobbies[1];  //returns nfts
val = person.address;   //returns {street: '233 Last Lane', city: 'Boop', state: 'Bippity'}
val = person.address.state;  //Bippity
val = person.address['city']; //Boop
val = person.getBirthYear();  //1986


console.log(val);


//Arrays of Objects: 

const people = [
  {name : 'John', age: '33'},
  {name : 'Mike', age: '2'},

];

for(let i = 0; i < people.length; i ++){
  console.log(people[i].name);
}

//returns John, Mike. Looping through the # of items in an array and returning people.name object. 