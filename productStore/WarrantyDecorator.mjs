import { Product } from "./product.mjs";

export class WarrantyDecorator extends Product {
  constructor(product) {
    // Tu código aquí 👈
    super();
    this.price = product.price + 20;
    this.description = ` ${product.description} with warranty`;
  }

  getPrice() {
    // Tu código aquí 👈
    return this.price;
  }

  getDescription() {
    // Tu código aquí 👈
    return this.description;
  }
}
