class Subscriber {
  // Tu código aquí 👈
  constructor(email) {
    this.email = email;
  }

  receive(article) {
    console.log(
      `Suscriber ${this.email}, received the ${article.title} article.`
    );
  }
}

class Newsletter {
  // Tu código aquí 👈
  subscribers = [];

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(email) {
    const deletedSubscriberIndex = this.subscribers.findIndex(
      (sub) => sub.email === email
    );
    this.subscribers.splice(deletedSubscriberIndex, 1);
  }

  post(article) {
    this.subscribers.forEach((sub) => sub.receive(article));
  }
}

const newsletter = new Newsletter();
const subscriber1 = new Subscriber("pepe@mail.com");
const subscriber2 = new Subscriber("juanito@mail.com");
const subscriber3 = new Subscriber("pedro@mail.com");

const article = {
  title: "30 días de js",
  content: "Aprende js en 30 días",
};

newsletter.subscribe(subscriber1);
newsletter.subscribe(subscriber2);
newsletter.subscribe(subscriber3);

newsletter.post(article);
