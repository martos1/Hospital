function Person(firstName, lastName) {
	var _firstName = firstName;
	var _lastName = lastName;
	
	this.getFirstName = function() {
		return _firstName;
	}
	this.getLastName = function() {
		return _lastName;
	}

}