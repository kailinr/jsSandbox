const num1 = 100;
const num2 = 50;
let val;


//Simple Math w/ Numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2; //returns 0


//Math Objects:
//Has properties (attributes) and Methods (functions)

val = Math.PI //returns 3.1415
val = Math.E
val = Math.round(2.8); //returns 3

//Round Up:
val = Math.ceil(2.4); //returns 3

//Round Dowm:
val = Math.floor(2.4); //returns 2

//Sqr Root
val = Math.sqrt(64); //8

//Absolute Value
val = Math.abs(-3); //returns 3

//Power
val = Math.pow(8,2);  //means 8 to the power of 2, returns 64

//Min & Max:
val = Math.min(1,2,3,22,1,23);  //returns 1
val = Math.max(3,6,4,2,2,4,5443,);

//Random: 
val = Math.random();  //returns random decimal.

//Random Number > 1
val = Math.random() * 20; //returns random number from 0 - 19 because you're multiplying a decimal by 20.

//Random Number between 1 and 20
val = Math.random() * 20 + 1    //random # (float)  between 1 and 20 - has decimals.

//Random Whole Number between 1 & 20 [no decimal}]
val = Math.floor(Math.random() * 20 + 1); 



console.log(val);