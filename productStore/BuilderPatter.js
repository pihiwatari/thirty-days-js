class CarBuilder {
  // Tu código aquí 👇
  setYear(Year) {
    this.Year = Year;
    return this;
  }

  setModel(Model) {
    this.Model = Model;
    return this;
  }
  setBrand(Brand) {
    this.Brand = Brand;
    return this;
  }
  setColor(Color) {
    this.Color = Color;
    return this;
  }
  setPrice(Price) {
    this.Price = Price;
    return this;
  }
  setIsAvailable(IsAvailable) {
    this.IsAvailable = IsAvailable;
    return this;
  }
  build() {
    return {
      year: this.Year,
      model: this.Model,
      brand: this.Brand,
      color: this.Color,
      price: this.Price,
      isAvailable: this.IsAvailable,
    };
  }
}

const car = new CarBuilder()
  .setYear(2021)
  .setModel("Model X")
  .setBrand("Tesla")
  .setColor("Red")
  .setPrice(50000)
  .setIsAvailable(false)
  .build();

console.log(car);
