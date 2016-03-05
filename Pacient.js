/**
 * 
 */

function Pacient(firstName, lastName, gender, diagnose, dr, otdelenie) {
	Person.call(this, firstName, lastName);
	var _gender = gender;
	var _dr = '';
	var _diagnoseName = '';
	var _otdelenie ;
	
	this.getOtdelenie = function() {
		return _otdelenie;
	}
	
	this.getGender = function() {
		return _gender;
	}
	this.getDoctor = function() {
		return _dr;
	}
	this.getDiagnose = function() {
		return _diagnoseName;
	}
	
	this.setDoctor = function(doctor) {
		_dr = doctor;
	}
	
	this.setDiagnose = function(diagnose){
		_diagnoseName = diagnose;
	}
	
	this.setOtdelenie = function(otdelenie){
		_otdelenie = otdelenie;
	}
	
}