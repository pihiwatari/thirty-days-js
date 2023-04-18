import { Product } from "./product.mjs";
import { ShippingInsuranceDecorator } from "./ShippingInsurance.mjs";
import { WarrantyDecorator } from "./WarrantyDecorator.mjs";

class BasicProduct extends Product {
  constructor(price, description) {
    // Tu código aquí 👈
    super();
    this.price = price;
    this.description = description;
  }

  getDescription() {
    // Tu código aquí 👈
    return this.description;
  }
}

const basicProduct = new BasicProduct(100, "Camisa de algodón");
const withWarranty = new WarrantyDecorator(basicProduct);
const withShippingInsurance = new ShippingInsuranceDecorator(withWarranty);
console.log(withShippingInsurance.getPrice());
console.log(withShippingInsurance.getDescription());
