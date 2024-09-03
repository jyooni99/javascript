//--------------------(1)
var a = 1;

function outer(){
	function inner(){
		console.log(a); //undefined
		var a = 2;
	}
	
	inner(); // --------(2)
	console.log(a); //1
}

outer(); //-----------(3)
console.log(a); //1