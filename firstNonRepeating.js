function firstNonRepeating(text) {
  var len = text.length, i, currentChar;

  for (i = 0; i < len; i++) {
    currentChar = text.charAt(i);
    if (text.indexOf(currentChar) === i && text.indexOf(currentChar, i + 1) === -1) {
      return currentChar;
    }
  }
}

console.log(firstNonRepeating("aaaabcdebfg"));
