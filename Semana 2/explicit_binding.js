const animal = {
  species: "Sea lion",
  saySpecies: function (language) {
  	if (language  === "English") {
    console.log(`I am a ${this.species}`);
	}
	else {
	 console.log(`Soy un ${this.species}`);	
	}
  }
};

const dolphin = {species: "Dolphin"};

animal.saySpecies.call(dolphin, "English"); //Prints: I am a Dolphin.
animal.saySpecies.apply(dolphin, ["English"]); //Prints: I am a Dolphin.