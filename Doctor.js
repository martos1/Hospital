/**
 * 
 */

function Doctor(firstName, lastName) {
	Person.call(this,firstName, lastName);
	var _patient = [];
	
	this.getPatient = function() {
		return _patient;
	}
	
	this.addPacient = function(patient) {
		_patient.push(patient);
	}
	
}

Doctor.prototype = new Person();
Doctor.prototype.constructor = Doctor;

Doctor.prototype.visited = function() {
	var patients = this.getPatient();
	for (i in patients){
		console.log('Lekar ' + this.getFirstName() + ' ' + this.getLastName() +
				' poseti pacient ' + patients[i].getFirstName() + ' ' +
				patients[i].getLastName()  )
	} 
}

Doctor.prototype.setDiagnosa = function() {
	var diagnoza = [
		{diagnoza: 'schupen krak', otdelenie: 'ortopediq'},
		{diagnoza: 'grip', otdelenie: 'virusologiq'},
		{diagnoza: 'aritmia', otdelenie: 'kardiologiq'}
	];
	
	
	return diagnoza[Math.floor(Math.random()*diagnoza.length)];
} 

