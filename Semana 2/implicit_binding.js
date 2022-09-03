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

animal.saySpecies("English"); //Prints: I am a Sea lion.



