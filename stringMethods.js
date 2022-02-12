const firstName = "William";
const lastName = "Johnson";
const str = 'Hello there my name is Brad';
const tag = 'webdev, web3, nfts, art';

let val;

val = firstName + lastName;

//Concatenate:
val = firstName + " "+ lastName;

//Append*:
val = 'Brad ';
val += 'Travesty';     //there's a space after Brad, and the += adds travesty to Brad

val += ' smells';  // returns Brad Travesty smells

//Escaping:
val = 'That\'s awesome, I can\'t wait';

//the back slashes prevent the editor from assuming a string has ended when typing apostrophes. You can also solve using "".

//Length Method:
val = firstName.length;

//concat Method:
val = firstName.concat(' ', lastName);  //also returns William Johnson.
val = firstName.concat(' hello', ' testing');  //returns William hello testing

//Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase(); //william

//Select specific letters in a string
val = firstName[0];  //returns W

//indexOf() - Returns the position of the first occurrence of a substring.
val = firstName.indexOf('a');    //returns 5
val = firstName[5];  //returns a

//Reverse Indexof
val = firstName.lastIndexOf('i');    //returns 5

//charAt() - find the letter "character" at a specific position
val = firstName.charAt('2');    //returns l

//**Get Last Character */
val = firstName.charAt(firstName.length - 1);   //returns m

//Substrings - pull a sub-string out of a string
val = firstName.substring(0,4);    // (char from, char to) 
                                  //returns will 

//Slice - pulls things out of arrays and strings
//similar to substring.
val = firstName.slice(0,4);  //returns Will
val = firstName.slice(3);    //returns liam - cuts off first 3
val = firstName.slice(-3);    // returns iam   - starts from the end and returns the last 3

//Split:
//splits a string into an array based on a separator 
val = str.split(' ');
//returns each of these words in an array with lengh (6) 

val = tag.split(' ');
//* retruns (4) ['webdev,', 'web3,', 'nfts,', 'art']0: "webdev,"1: "web3,"2: "nfts,"3: "art"length: 4 */

//Replace:
//Replaces first match with string or all matches with RegExp.

//This repalces brad with jack in the string variable 'str'
val = str.replace('Good', 'Jack');
//replaces Hello with Goodbye. It's case sensitive
val = str.replace('Hello', 'Goodbye');


//Includes:
//tells you if something is included inside a string or not.
val = str.includes('Hello');    //returns bool t or f if included.



console.log(val);