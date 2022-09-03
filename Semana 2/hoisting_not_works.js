// No funciona con const o con let
function noFunciona(){
	y = 'No funciona';
	console.log(y); 
	const y; 
}

noFunciona(); // SyntaxError: Missing initializer in const declaration

