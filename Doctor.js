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
	for (patient in this.getPatient()){
		console.log('Lekar ' + this.getFirstName() + ' ' + this.getLastName() +
				' poseti pacient ' + patient.getFirstName() + ' ' +
				patient.getLastName() + ' v staq ' + patient.getRoom()  )
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

