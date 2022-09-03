function calls() {
	let name = "Sofia";
	let called = 0;
	return function() {
		called += 1;
		console.log("Hi! I'm Sofia and I've been called " + called + " times");
	}
}


const llamado_1 = calls();
llamado_1(); //Prints: "Hi! I'm Sofia and I've been called 1 times"
llamado_1(); //Prints: "Hi! I'm Sofia and I've been called 2 times"
llamado_1(); //Prints: "Hi! I'm Sofia and I've been called 3 times"
const llamado_2 = calls();
llamado_2(); //Prints: "Hi! I'm Sofia and I've been called 1 times"
llamado_2(); //Prints: "Hi! I'm Sofia and I've been called 2 times"
llamado_2(); //Prints: "Hi! I'm Sofia and I've been called 3 times"
