/**
 * 
 */

function MedSestra(firstName, lastName) {
	Person.call(this,firstName, lastName);
	var _otdelenie;
	
	this.getOtdelenie = function() {
		return _otdelenie;
	}
	
	this.setOtdelenie = function(otdelenie) {
		_otdelenie = otdelenie;
	}
	
}

MedSestra.prototype = new Person();
MedSestra.prototype.constructor = MedSestra;

MedSestra.prototype.giveDrugs = function() {

	for(var i = 0; i < this.getOtdelenie().getStai().length; i++){
		var stai = this.getOtdelenie().getStai()[i];
		 for(j in stai.getLegla()){
			console.log('Sestra '+ this.getFirstName() + ' '+
					this.getLastName()+ ' dade na pacient ' +
					stai.getLegla()[j].getFirstName()
					+ ' ' + stai.getLegla()[j].getLastName() + ' v staq ' +
					(j * 1 + 1) + ' lekarstvo.' );
		} 
		
	} 
}