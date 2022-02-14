const color = 'yellow';

switch (color) {
  case 'red':
    console.log("Color is red");
    break;
  case 'blue':
    console.log('Color is Blue');
    //can add as many cases and breaks as you want
  default: 
    console.log('color is not red or blue');
    break;
}

//Get Date Switch Statement:

let day; 

switch (new Date().getDay()){
  case 0:
    day = 'Sunday'
    break;
  
    case 1:
    day = 'Monday'
    break;
  
    case 2:
      day = 'Tuesday'
      break;

      case 3:
        day = 'Wednesday'
        break;

        case 4:
          day = 'Thursday'
          break;

          case 5:
            day = 'Friday'
            break;

            case 6:
              day = 'Saturday'
              break;

              case 7:
                day = 'Sunday'
                break;
}

console.log(`Today is ${day}`);



const dayTest = new Date().getMonth();

console.log(dayTest);