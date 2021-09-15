const fibonacci = function(n) {
	let result = 0;
	n = Number(n);
	if (n < 0) return "OOPS";
	else if (n === 1) result = 1;
	else if (n >= 2) {
		result = fibonacci(n - 2) + fibonacci(n - 1);
	}
	return result;
};

// Do not edit below this line
module.exports = fibonacci;
