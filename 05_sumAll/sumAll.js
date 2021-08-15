const sumAll = function(num1, num2) {
	let sum = 0;
	let min;
	let max;
	// if (num1 < 0 || num2 < 0) {
	// 	return "ERROR";
	// }

	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] < 0 || typeof arguments[i] !== "number") {
			return "ERROR";
		}
	}

	if (num1 > num2) {
		min = num2;
		max = num1;
	}
	else {
		min = num1;
		max = num2;
	}
	while (min <= max) {
		sum += min;
		min++;
	}
	return sum;
};

module.exports = sumAll;
