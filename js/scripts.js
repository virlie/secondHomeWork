//business logic
var countingArray = [];

function inputToArray(inputNumber) { //make input into array
  //count to number
  for (var i = 1; i <= inputNumber; i++) {
    countingArray.push(i);
  }
  return convertToPingPong();
}
