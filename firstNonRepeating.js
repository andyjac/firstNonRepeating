function firstNonRepeating(text) {
  var len = text.length, i, currentChar, nextChar;

  for (i = 0; i < len; i++) {
    currentChar = text.charAt(i);
    nextChar = text[text.indexOf(currentChar) + 1];
    if (currentChar !== nextChar) {
      return currentChar;
    }
  }
}

console.log(firstNonRepeating("aaaaaaaabbcdefg"));
