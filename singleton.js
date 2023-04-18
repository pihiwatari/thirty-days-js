class User {
  // Este código no debe ser editado ❌
  constructor(name) {
    this.name = name;
    this.messages = [];
  }

  receiveMessage(message) {
    this.messages.push(message);
  }
}

class Chat {
  // Tu código aquí 👈
  users = [];
  constructor() {
    if (!Chat.instance) {
      Chat.instance = Object.freeze(this);
    }
    return Chat.instance;
  }

  sendMessage(message) {
    if (this.users.length > 0) {
      this.users.forEach((user) => user.receiveMessage(message));
    }
  }

  addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
    }
  }

  removeUser(name) {
    this.users = this.users.filter((user) => !user.name);
  }
}

const chat1 = new Chat();
const chat2 = new Chat();

console.log(chat1 === chat2);

const chat = new Chat();
const user1 = new User("Pepito");
const user2 = new User("Juanito");
chat.addUser(user1);
chat.addUser(user2);

chat.sendMessage("Nunca pares de aprender!");

console.log(user1.messages);
console.log(user2.messages);
console.log(chat.users);
