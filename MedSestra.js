/**
 * 
 */

function MedSestra(firstName, lastName, otdelenie) {
	Person.call(this,firstName, lastName);
	var _otdelenie = otdelenie;
	
	this.getOtdelenie = function() {
		return _otdelenie;
	}
	
}

MedSestra.prototype = new Person();
MedSestra.prototype.constructor = MedSestra;

MedSestra.prototype.giveDrugs = function() {

	for(var i = 0; i < this.getOtdelenie().getStai().length; i++){
		//console.log(this.getOtdelenie().getStai()[i]);
		var stai = this.getOtdelenie().getStai()[i];
		
		 for(patient in stai.getLegla()){
		 console.log(patient);
			console.log('Sestra '+ this.getFirstName() + ' '+
					this.getLastName+ ' dade na pacient ' +
					patient.getFirstName()
					+ ' ' + patient.getLastName() + ' v staq ' +
					stai + ' ot otdelenie ' + this.getOtdelenie() + ' lekarstvo.' );
		} 
		
	} 
}