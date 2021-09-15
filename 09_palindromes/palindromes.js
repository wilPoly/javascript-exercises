const palindromes = function (string) {
	let noPunc = /\w/g;
	string = string.toLowerCase().match(noPunc);
	// console.log("original", string.join(""));
	
	let newString = string;
	newString.reverse();
	// console.log("mutated", newString.join(""));
	for (let i = 0; i < string.length; i++) {
		if (string[i] !== newString[i]) {
			return false;
		}
		else continue;
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
