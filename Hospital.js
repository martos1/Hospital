/**
 * 
 */

function Hospital() {
	var _dr = [];
	var _medS = [];
	var _patient = [];
	var _otdeleniq = {
		ortopediq: new Ortopediq(),
		kardiologiq: new Kardiologia(),
		virusologiq: new Virusologia()
		};
	
	this.getOtdelenie = function(){
		return _otdeleniq;
	}
	
	this.getDoctor = function() {
		return _dr;
	}
	this.getMedS = function() {
		return _medS;
	}
	this.getPatient = function() {
		return _patient;
	}
	this.setMedS = function(medS) {
		_medS.push(medS);
	}
	
	this.setDr = function(dr) {
		_dr.push(dr);
	}
	
	this.setPatient = function(patient) {
		_patient.push(patient);
	}
	
}
Hospital.prototype.nastanqvane = function(patient){
	var otdelenie = patient.getOtdelenie();
	var stai = otdelenie.getStai();
	for(var i = 0; i < stai.length; i++){
		if(stai[i].checkStaq(stai[i])){
			this.setPatient(patient);
			stai[i].addPatient(patient);
			
			break;
		}
	}
}

Hospital.prototype.getRandDoctor = function(){
	return this.getDoctor()[Math.floor(Math.random()*(this.getDoctor().length - 1))];
}

Hospital.prototype.priem = function(pacient) {
	var doctor = this.getRandDoctor();
	var diagnose = doctor.setDiagnosa();
	pacient.setDiagnose(diagnose['diagnoza']);
	pacient.setDoctor(doctor);
	pacient.setOtdelenie(this.getOtdelenie()[diagnose['otdelenie']]);
	doctor.addPacient(pacient);
	this.nastanqvane(pacient);
	this.setPatient(pacient);
	console.log('Pacient ' + pacient.getFirstName() + ' ' + pacient.getLastName() + ' ot pol ' 
			+ pacient.getGender() + ' e priet s diagnoza ' + diagnose['diagnoza'] + '. Lekuvasht lekar: d-r '
			+ doctor.getFirstName() + ' ' + doctor.getLastName()
			)
			
			
}

Hospital.prototype.izpisvane = function(patient) {
	console.log('Pacient ' + patient.getFirstName() + ' ' + patient.getLastName()
			+ ' ot pol ' + patient.getGender() + ' s diagnoza '
			+ patient.getDiagnose() +' beshe izpisan.'
			);
	
}