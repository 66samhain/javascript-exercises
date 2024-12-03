const removeFromArray = function(array, ...elementsToRemove) {
  let newArray = []

  for (let j = 0; j < array.length; j++) {
    if (!elementsToRemove.includes(array[j])) {
      newArray.push(array[j])
    }
  }

  return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
