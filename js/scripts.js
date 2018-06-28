var runPingPong = function(userInput) {
  var numbers = []
  var countNumbers = []
  for (var index = 0; index < userInput; index ++) {
  	numbers.push(userInput);
  }
  for (var i = 0; i < numbers.length; i++) {
    countNumbers.push(numbers[i] - i);
  }
  for (var i = 0; i < countNumbers.length; i++) {
    if ((countNumbers[i] % 3 === 0) && (countNumbers[i] % 15 !== 0)){
      countNumbers.splice(i, 1, "ping");
    } else if ((countNumbers[i] % 5 === 0) && (countNumbers[i] % 15 !== 0)) {
      countNumbers.splice(i, 1, "pong");
    } else if (countNumbers[i] % 15 === 0) {
      countNumbers.splice(i, 1, "ping-pong");
    }
  }
  return countNumbers
};
