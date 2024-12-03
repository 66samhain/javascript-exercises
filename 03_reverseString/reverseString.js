const reverseString = function(string) {
  const reversedCharactersArray = string.split('').reverse()
  const reversedString = reversedCharactersArray.join('')

  return reversedString
};

// Do not edit below this line
module.exports = reverseString;
