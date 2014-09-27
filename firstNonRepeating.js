function firstNonRepeating(text) {
  var len = text.length, space = ' ', charTracker = {}, i, currentChar, letterInObject;
  if (!text) {
    return '';
  }
  for (i = 0; i < len; i++) {
    currentChar = text[i];
    letterInObject = charTracker[currentChar];
    if (letterInObject && currentChar !== space) {
      charTracker[currentChar] += 1;
    } else if (!letterInObject && currentChar !== space) {
      charTracker[currentChar] = 1;
    }
  }
  for (i in charTracker) {
    if (charTracker[i] === 1) {
      return i;
    }
  }
  return '';
}

console.log(firstNonRepeating('a a aab c debfg'));
console.log(firstNonRepeating(''));
console.log(firstNonRepeating('abc  abc a      bc g abcabf g '));
console.log(firstNonRepeating('  '));
