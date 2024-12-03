const repeatString = function(stringToRepeat, timesToRepeat) {
  if (timesToRepeat < 0) {
    return 'ERROR'
  }

  let repeatedString = []

  for (let i = 0; i < timesToRepeat; i++) {
    repeatedString.push(stringToRepeat)
  }

  return repeatedString.join('')
};

// Do not edit below this line
module.exports = repeatString;
