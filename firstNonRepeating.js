function firstNonRepeating(text) {
  var len = text.length, space = ' ', i, currentChar, firstOccurence, remainingOccurences;
  if (len === 0) {
    return text;
  }
  for (i = 0; i < len; i++) {
    currentChar = text.charAt(i);
    firstOccurence = text.indexOf(currentChar);
    remainingOccurences = text.indexOf(currentChar, i + 1);
    if (currentChar !== space && firstOccurence === i && remainingOccurences === -1) {
      return currentChar;
    }
  }
  return '';
}

console.log(firstNonRepeating("a a aab c debfg"));
