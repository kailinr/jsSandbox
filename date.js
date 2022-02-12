let val;

const today = new Date();    //Date is an object. Remember to add () after objects and functions.

val = today; //Fri Feb 11 2022 22:06:54 GMT-0800 (Pacific Standard Time)
console.log(typeof val);  //object

//Change Date to Sting
val = today.toString(); //Fri Feb 11 2022 22:07:15 GMT-0800 (Pacific Standard Time)
console.log(typeof val);  //String


let birthday = new Date('9-10-1981');
birthday = new Date('9/10/1891');
birthday = new Date('September 10 1999');

console.log(birthday);


//Return the Month #
val = today.getMonth();

//Return Day
val = today.getDate();

//Return Day #
val = today.getDay();

//Return Year
val = today.getFullYear();

//Return Hours
val = today.getHours();

//Return Minutes
//.getMinutes();
//.getSeconds();

//Get Timestamp
val = today.getTime();
//number of seconds since date



//SET DATES:

birthday.setMonth(2);
birthday.setDate(12)
birthday.setFullYear(12)
birthday.setHours(12)
//etc

console.log(val);