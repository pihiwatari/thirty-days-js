import { Flight } from "./Flight.mjs";
import { Reservation } from "./Reservation.mjs";

export class PremiumFlight extends Flight {
  constructor(origin, destination, date, capacity, price) {
    super(origin, destination, date, capacity, price);
    this.passengers = [];
    this.specialService = 1.2;
  }

  sellTicket(passenger) {
    if (this.capacity > 0) {
      // Add passenger and reduce capacity by each indivudial
      this.passengers.push(passenger);
      this.capacity -= 1;

      // Add flight to passenger's data
      passenger.flights.push({
        origin: this.origin,
        destination: this.destination,
        date: this.date,
        price: this.price * this.specialService,
      });

      return new Reservation(this, passenger);
    }
  }
}
