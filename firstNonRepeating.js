function firstNonRepeating(text) {
  var len = text.length, i, currentChar;

  for (i = 0; i < len; i++) {
    currentChar = text.charAt(i);
    if (text.lastIndexOf(currentChar, i) === i) {
      return currentChar;
    }
  }
}

console.log(firstNonRepeating("aaaabcdebfg"));
