import { Passenger } from "./Passenger.mjs";
import { Flight } from "./Flight.mjs";
import { EconomicFlight } from "./EconomicFlight.mjs";
import { PremiumFlight } from "./PremiumFlight.mjs";

const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);
const passenger = new Passenger("Juan", "Perez", 30);
const reservation = flight.sellTicket(passenger);

const passenger2 = new Passenger("Sergio", "Ramos", 18);
const reservation2 = flight.sellTicket(passenger2);

const flight2 = new EconomicFlight("New York", "Paris", "2023-12-25", 100, 200);
const passenger3 = new Passenger("Pedro", "Gutierrez", 17);
const reservation3 = flight2.sellTicket(passenger3);

const flight3 = new PremiumFlight("New York", "Paris", "2023-12-10", 3, 400);
const passenger4 = new Passenger("Pedro", "Gutierrez", 35);
const reservation4 = flight3.sellTicket(passenger4);

console.log("Passenger flights: ", passenger.flights);
console.log("Passenger3 flights: ", passenger3.flights);
console.log("Flight's passengers: ", flight.passengers);
console.log("Flight 2's passengers: ", flight2.passengers);
console.log("Reservation log: ", reservation);
console.log("Reservation 2 log: ", reservation2);
console.log("Reservation 3 log: ", reservation3);
console.log("Reservation 4 log: ", reservation4);
