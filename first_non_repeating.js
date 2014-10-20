function firstNonRepeating(input) {
  var charTracker = {}
      , currentChar;

  for (var i = 0; i < input.length; i++) {
    currentChar = input[i];

    if (charTracker[currentChar] !== undefined) {
      charTracker[currentChar] += 1;
    }
    else {
      charTracker[currentChar] = 1;
    }
  }

  for (currentChar in charTracker) {

    if (charTracker[currentChar] === 1) {
      return currentChar;
    }
  }
  return '';
}
