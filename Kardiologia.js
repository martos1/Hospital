/**
 * 
 */

function Kardiologia() {
	Otdelenie.call(this );
	
	
}

Kardiologia.prototype = new Otdelenie();
Kardiologia.prototype.constructor = Kardiologia;