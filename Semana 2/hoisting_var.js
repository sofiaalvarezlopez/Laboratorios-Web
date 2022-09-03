// Invocar la variable antes de declararla (con var).
function funciona(){
	x = 5;
	console.log('La variable es:', x);
	var x; 
}

funciona(); //Prints: La variable es: 5

