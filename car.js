class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = 0;
    this.state = false;
  }

  turnOn() {
    console.log("Car turned on! No pun intended");
    this.state = true;
  }

  turnOff() {
    console.log("Car turned off! No pun intended");
    this.state = false;
  }

  drive(miles) {
    if (this.state === false) {
      const error = new Error("Error: Car is turned off...");
      console.log(error.message);
      return;
    }
    this.mileage += miles;
    return this.mileage;
  }
}

const toyota = new Car("Toyota", "Corolla", 2020);
toyota.turnOn();
toyota.drive(100);
console.log(toyota.mileage);
toyota.turnOff();
toyota.drive(100);
