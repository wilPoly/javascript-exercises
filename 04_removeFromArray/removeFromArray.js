const removeFromArray = function(array, ...removed) {
	for (let i = 0; i < removed.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (removed[i] === array[j]) {
				array.splice(j, 1);
			}
		}
	}
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
