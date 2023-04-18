export class Reservation {
  constructor(flight, passenger) {
    // Tu código aquí 👈
    this.flight = flight;
    this.passenger = passenger;
  }

  reservationDetails() {
    // Tu código aquí 👈
    return {
      flightDetails: this.flight,
      passenger: this.passenger,
    };
  }
}
