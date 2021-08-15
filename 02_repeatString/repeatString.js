const repeatString = function(string, num) {
	let newString = "";
	if (num < 0) {
		return "ERROR";
	}
	else {
		for (let i = 1; i <= num; i++) {
			newString += string;
		}
		return newString;
	}
};

module.exports = repeatString;
