import { Reservation } from "./Reservation.mjs";

export class Flight {
  constructor(origin, destination, date, capacity, price) {
    // Tu código aquí 👈
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.capacity = capacity;
    this.price = price;
    this.passengers = [];
  }

  sellTicket(passenger) {
    // Tu código aquí 👈
    if (this.capacity > 0) {
      // Add passenger and reduce capacity by each indivudial
      this.passengers.push({
        fullName: `${passenger.name} ${passenger.lastName}`,
        age: passenger.age,
      });
      this.capacity -= 1;

      // Add flight to passenger's data
      passenger.flights.push({
        origin: this.origin,
        destination: this.destination,
        date: this.date,
        price: this.price,
      });

      return new Reservation(this, passenger);
    }
  }
}
