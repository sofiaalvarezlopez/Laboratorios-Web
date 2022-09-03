const animal = {
  name: "Señor Cinco",
  species: "Sea Lion",
  residence: "Vancouver aquarium",
  introduce: function () {
    const placeOfLiving = () => {
      console.log(`I live in the ${this.residence}`);
    };
    console.log(`Hi! My name is ${this.name} and I am a ${this.species}`);
    placeOfLiving();
  },
};

animal.introduce();
// Prints: Hi! My name is Señor Cinco and I am Sea Lion
//		   I live in the Vancouver aquarium
