function firstNonRepeating(text) {
  var len = text.length, space = ' ', charTracker = {}, index, prop, currentChar, letterInObject;
  if (!text) {
    return '';
  }
  for (index = 0; index < len; index++) {
    currentChar = text[index];
    letterInObject = charTracker[currentChar];
    if (letterInObject && currentChar !== space) {
      charTracker[currentChar] += 1;
    } else if (!letterInObject && currentChar !== space) {
      charTracker[currentChar] = 1;
    }
  }
  for (prop in charTracker) {
    if (charTracker[prop] === 1) {
      return prop;
    }
  }
  return '';
}

console.log(firstNonRepeating('a a aab c debfg'));
console.log(firstNonRepeating(''));
console.log(firstNonRepeating('abc  abc a      bc g abcabf g '));
console.log(firstNonRepeating('  '));
