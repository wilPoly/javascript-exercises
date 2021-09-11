const ftoc = function(temp) {
	let tempCelsius = Number(((temp - 32) * 5 / 9).toFixed(1));
	return (tempCelsius === 0.0) ?  0 : tempCelsius;
};

const ctof = function(temp) {
	let tempFaranheit = Number((temp * 9 / 5 + 32).toFixed(1));
	return (tempFaranheit === 0.0) ? 0 : tempFaranheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
