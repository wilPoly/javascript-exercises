const findTheOldest = function(people) {
	const now = new Date().getFullYear();

	const newPeople = people.map(person => {
		if ("yearOfDeath" in person) {
			return person;
		}
		else {
			person.yearOfDeath = now;
			return person;
		}
	});
	console.table(newPeople);

	const oldest = newPeople.sort((firstPerson, secondPerson) => {
		return (firstPerson.yearOfDeath - firstPerson.yearOfBirth) > 
		(secondPerson.yearOfDeath - secondPerson.yearOfBirth) ? -1 : 1;
	});
	console.table(oldest);
	
	return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
