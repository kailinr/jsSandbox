//WINDOW METHODS / OBJECTS / PROPERTIES

// window.console.log(123);
//same as log

//ALERT
// window.alert('Hello World');
//same as alert

//PROMPT - asks and then alerts
// const input = prompt();
// alert(input);

//CONFIRM - 
//used to confirm aciton like a delete something

//returns yes in console if you click yes, and no if you click no. 

// if (confirm('are you sure?')){
//   console.log('Yes');
// } else {
//   console.log('No');
// };

// if(confirm('tell me more?')){
//   console.log('Nope');
// } else {
//   console.log('Fine');
// };


//Get Height and Width of Window:

let val;

//Outer Height & Width: 
val = window.outerHeight;
val = window.outerWidth;
//top to bottom

//Inner Height & Width: 
val = window.innerHeight;
val = window.innerWidth; 
//top to bottom inside scroll bars

//Scroll Points
val = window.scrollY;   //vertical axis
val = window.scrollX; //shows you how big the window is at a given up/down scroll position


//Location Object:
val = window.location; //returns all object items
val = window.location.hostname;  //returns 127.0.0.1 or domain name
val = window.location.port;  //returns 5500
val = window.location.href;   //returns protocol://hostname:port  ex: http://127.0.0.1:5500/
val = window.location.search; //returns search result

//Redirect: 
// val = window.location.href = 'http://google.com';  //its a webpage redirect to google.com
val = window.location.href; 

//Reload
// window.location.reload();

//Browsing History Object:
window.history.go(-2); //goes back 2 websites ago.
window.history.go(-3);
//Length of Browsing History
val = window.history.length;  //returns 3

//Navigator Object (IBrowser key / values in object):
val = window.navigator;
val = window.navigator.appName;  //returns Netscape
val = window.navigator.appVersion;  //returns Mac intel macos, generation 5.0, etc.
val = window.navigator.platform;  //returns MacIntel
val = window.navigator.vendor; //returns Google Inc.
val = window.navigator.language; //en-Us


console.log(val);
console.log(typeof val);