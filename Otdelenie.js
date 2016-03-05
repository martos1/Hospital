function Otdelenie() {
	var _stai = [];

	this.getStai = function() {
		return _stai;
	}
	
	this.setStai = function(stai) {
		_stai.push(stai);
	}
	
	for(var i = 0; i < 10; i++){
		this.setStai(new Staq());
	}
}



