class Product {
  // No debes editar este archivo ❌
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  addToCart() {
    throw new Error(
      "La lógica de este método debe ser implementada por las clases hijas"
    );
  }
}

class Article extends Product {
  // Tu código aquí 👈
  constructor(name, price, quantity) {
    super(name, price, quantity);
  }

  addToCart() {
    let message = `Adding ${this.quantity} units of ${this.name} to cart`;
    console.log(message);
    return message;
  }
}

class Service extends Product {
  // Tu código aquí 👈
  constructor(name, price, quantity) {
    super(name, price, quantity);
  }

  addToCart() {
    let message = `Adding service: ${this.name} to cart`;
    console.log(message);
    return message;
  }
}

class Cart {
  // Tu código aquí 👈
  constructor() {
    this.items = [];
  }

  addProduct(item) {
    item.addToCart();
    this.items.push(item);
  }

  deleteProduct(item) {
    const revisedCartItems = this.items.filter(
      (cartItem) => cartItem.name !== item.name
    );
    this.items = revisedCartItems;
    return this.items;
  }

  calculateTotal() {
    let total = this.items
      .map((item) => item.price * item.quantity)
      .reduce((acc, cur) => acc + cur, 0);

    console.log(total);
    return total;
  }
}

const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120, 1);

const cart = new Cart();
cart.addProduct(book);
cart.addProduct(course);
cart.calculateTotal();

cart.deleteProduct(book);
cart.calculateTotal();
