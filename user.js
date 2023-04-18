class User {
  #name;
  #age;
  #friends;
  #messages;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
    this.#friends = [];
    this.#messages = [];
  }

  addFriend(friend) {
    this.#friends.push(friend);
  }

  sendMessage(message, friend) {
    if (this.#friends.some((user) => friend.#name === user.#name)) {
      this.#messages.push(message);
    }
  }

  showMessages() {
    console.log(this.#messages);
    return this.#messages;
  }

  get #privateName() {
    return this.#name;
  }

  set #privateName(newName) {
    this.#name = newName;
    return this.#name;
  }

  get #privateAge() {
    return this.#age;
  }

  set #privateAAge(newAge) {
    this.#age = newAge;
    return this.#age;
  }
}

const usuario1 = new User("Juan", 20);
const usuario2 = new User("Maria", 25);
usuario1.addFriend(usuario2);
usuario1.sendMessage("Hola Maria!", usuario2);

usuario1.showMessages();

usuario1.name = "Pepito";
console.log(usuario1.name);
