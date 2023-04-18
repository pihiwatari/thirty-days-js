import { Product } from "./product.mjs";

export class ShippingInsuranceDecorator extends Product {
  constructor(product) {
    // Tu código aquí 👈
    super();
    this.price = product.price + 20;
    this.description = ` ${product.description} with shipping insurance`;
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
