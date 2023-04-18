class Messages {
  // No debes editar este código ❌
  constructor() {
    this.history = [];
  }

  sendMessage(text) {
    this.history.push(text);
  }

  getHistory() {
    return this.history;
  }
}

class User {
  constructor(name) {
    // Tu código aquí 👈
    this.name = name;
    this.loggedIn = false;
  }

  login() {
    // Tu código aquí 👈
    if (!this.isLoggedIn()) {
      this.loggedIn = true;
    }
  }

  logout() {
    // Tu código aquí 👈
    if (this.isLoggedIn()) {
      this.loggedIn = false;
    }
  }

  isLoggedIn() {
    // Tu código aquí 👈
    return this.loggedIn;
  }
}

class MessagesProxy {
  constructor(messages, user) {
    // Tu código aquí 👈
    this.messages = messages;
    this.user = user;
  }

  sendMessage(text) {
    // Tu código aquí 👈
    if (this.user.isLoggedIn()) {
      this.messages.sendMessage(text);
    } else {
      throw new Error("User not registered");
    }
  }

  getHistory() {
    // Tu código aquí 👈
    if (this.user.isLoggedIn()) {
      return this.messages.getHistory();
    }
  }
}

const user = new User("John");

const messages = new Messages();
const messagesProxy = new MessagesProxy(messages, user);

user.login();
console.log("Is user logged in? ", user.isLoggedIn());
messagesProxy.sendMessage("Hola");
console.log(messagesProxy.getHistory());

// const user = new User("John");
// const messages = new Messages();
// const messagesProxy = new MessagesProxy(messages, user);

// messagesProxy.sendMessage("Hola");
