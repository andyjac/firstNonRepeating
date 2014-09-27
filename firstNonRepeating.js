function firstNonRepeating(text) {
  var len = text.length, space = ' ', charTracker = {}, i, currentChar, letterInObject;
  if (len === 0) {
    return '';
  }
  for (i = 0; i < len; i++) {
    currentChar = text[i];
    letterInObject = charTracker["letter " + currentChar];
    if (letterInObject && currentChar !== space) {
      charTracker["letter " + currentChar] += 1;
    } else if (!letterInObject && currentChar !== space) {
      charTracker["letter " + currentChar] = 1;
    }
  }
  console.log(charTracker);
}

console.log(firstNonRepeating("a a aab c debfg"));
console.log(firstNonRepeating(''));
