//FOR LOOP

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  console.log('Number' + i);
}  //logs Number0 ... number 10


//Add extra step to loop iteration 
for (let i = 0; i <= 10; i++) {
    if(i === 2){
      console.log("2 is the best");
    }
  console.log("Number " + i);
} //


//Replace Iteration w/ Different Functionality

for (let i = 0; i < 10; i++) {
  if (i === 8){
    console.log('NUMBER 8 FOR LIFE');
    continue;  //meaning keep going to the next iteration.
  }  
  console.log(`Number ${i}`);
}



//BREAK LOOP at a specific Condition
for (let i = 0; i < 10; i++) {
  if (i === 2){
    console.log('NUMBER 2 FOR LIFE');
    continue;  //meaning keep going to the next iteration.
  }  
  if (i === 6){
    console.log('Stop the Loop now');
    break;
  }
  console.log(`Number ${i}`);
}
