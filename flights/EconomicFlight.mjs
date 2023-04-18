import { Flight } from "./Flight.mjs";
import { Reservation } from "./Reservation.mjs";

export class EconomicFlight extends Flight {
  constructor(origin, destination, date, capacity, price) {
    super(origin, destination, date, capacity, price);
    this.passengers = [];
  }

  sellTicket(passenger) {
    if (this.capacity > 0) {
      // Check passenger's age for discount
      const hasDiscountPrice = passenger.age < 18 || passenger.age > 65;

      // Add passenger and reduce capacity by each indivudial
      this.passengers.push(passenger);
      this.capacity -= 1;

      // Add flight to passenger's data
      passenger.flights.push({
        origin: this.origin,
        destination: this.destination,
        date: this.date,
        price: hasDiscountPrice ? this.price * 0.8 : this.price,
      });

      return new Reservation(this, passenger);
    }
  }
}
