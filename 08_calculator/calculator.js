const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	let total = 0;
	return total = a.reduce((previous, current) => previous + current, 0);
};

const multiply = function(array) {
	let total = 0;
	return total = array.reduce((previous, current) => previous * current);
};

const power = function(number, powerUp) {
	return number ** powerUp;
};

const factorial = function(a) {
	if (a < 1) {
		return 1;
	}
	else {
		return a * factorial(a - 1);
	}
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
