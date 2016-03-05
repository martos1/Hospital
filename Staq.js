function Staq(){
	var _legla = [];
	var _gender = '';
	
	this.getLegla = function(){
		return _legla;
	}
	
	this.setLegla = function(patient){
		_legla.push(patient)
	}
	
	this.getGender = function(){
		return _gender;
	}
	
	this.setGender = function(gender){
		_gender = gender;
	}
	
	

}

Staq.prototype.checkStaq = function(patient){
	if(this.getGender() == '' || this.getGender() == patient.getGender()){
		return true;
	}
	
	return false;
}

Staq.prototype.addPatient = function(patient){
	this.setLegla(patient);
	this.setGender(patient.getGender());
}