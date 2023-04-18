function protectDog(dog) {
  // Tu código aquí 👈

  // Copy object and retrieve property names from object
  const copyDog = Object.assign({}, dog);
  const propNames = Reflect.ownKeys(copyDog);

  // Freeze props before freezing self
  for (const name of propNames) {
    const value = copyDog[name];

    if ((value && typeof value === "object") || typeof value === "function") {
      Object.freeze(value);
    }
  }

  return Object.freeze(copyDog);
}

let protectedDog = protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
});

protectedDog.name = "Toro";
console.log(protectedDog.name);
protectedDog.owner.name = "Nemo";
console.log(protectedDog.owner.name);
