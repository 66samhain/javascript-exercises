const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(numbers) {
	let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
  }

  return sum
};

const multiply = function(numbers) {
  let product = 1;

  for (let i = 0; i < numbers.length; i++) {
    product = product * numbers[i]
  }

  return product
};

const power = function(num1, num2) {
	return Math.pow(num1, num2)
};

const factorial = function(num) {
	let factorial = 1

  for (let i = num; i >= 1; i--) {
    factorial = factorial * i
  }

  return factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
