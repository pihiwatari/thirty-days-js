class Animal {
  // Tu código aquí 👈
  constructor(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  getInfo() {
    const info = {
      name: this.name,
      age: this.age,
      species: this.species,
    };
    return info;
  }
}

class Mammal extends Animal {
  // Tu código aquí 👈
  constructor(name, age, species, hasFur) {
    super(name, age, species);
    this.hasFur = hasFur;
  }

  getInfo() {
    const mammalInfo = { ...super.getInfo(), hasFur: this.hasFur };
    return mammalInfo;
  }
}

class Dog extends Mammal {
  // Tu código aquí 👈
  constructor(name, age, breed, hasFur) {
    super(name, age, hasFur);
    this.breed = breed;
  }

  bark() {
    return "Woof!";
  }
}

const bird = new Animal("pepe", 1, "bird");
console.log(bird.getInfo());

const hippo = new Mammal("bartolo", 3, "hippo", false);
console.log(hippo.getInfo());

const dog = new Dog("fido", 4, "pastor aleman", true);
console.log(dog.bark());
