const palindromes = function (string) {
	let originalString = string.toLowerCase().replace(/[^\w]/g, "");
	let newString = originalString.split("").reverse().join("")
	return (newString === originalString);
};

// Do not edit below this line
module.exports = palindromes;
