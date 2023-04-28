class Mail {
  constructor(from, to, body, subject) {
    this.from = from;
    this.to = to;
    this.body = body;
    this.subject = subject;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(from, to, body, subject) {
    // Tu código aquí 👈🏻
    const newMail = new Mail(from, to, body, subject);
    if (this.length === 0) {
      this.first = newMail;
      this.last = newMail;
    } else {
      this.last.next = newMail;
      this.last = newMail;
    }

    this.length++;
    return this;
  }

  dequeue() {
    // Tu código aquí 👈🏻

    const deletedMail = {
      from: this.first.from,
      to: this.first.to,
      body: this.first.body,
      subject: this.first.subject,
    };

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.length--;

    return deletedMail;
  }

  peek() {
    // Tu código aquí 👈🏻
    return this.first ? this.first : null;
  }

  size() {
    // Tu código aquí 👈🏻
    return this.length ? this.length : "Empty mailbox";
  }
}

// TESTS
const emailQueue = new Queue();

emailQueue.enqueue(
  "jane@ejemplo.com",
  "support@ejemplo.com",
  "No puedo iniciar sesión en mi cuenta",
  "Problema de inicio de sesión"
);

emailQueue.enqueue(
  "joe@ejemplo.com",
  "support@ejemplo.com",
  "Mi pedido no ha llegado todavía",
  "Estado del pedido"
);

console.log(emailQueue);
console.log(emailQueue.dequeue());
console.log(emailQueue.dequeue());
console.log(emailQueue.peek());
console.log(emailQueue.size());
console.log(emailQueue);
