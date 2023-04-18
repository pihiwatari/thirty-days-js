function hotelSystem(rooms) {
  // Creation of the hotel empty rooms
  const reservations = new Array(rooms);
  for (let i = 0; i < reservations.length; i++) {
    reservations[i] = { roomNumber: i + 1 };
  }

  // Helper functions
  function stringToDate(str) {
    // Expected format "dd/mm"
    const [day, month] = str.split("/");
    const year = new Date().getFullYear();
    const date = Date.parse(`${month}/${day}/${year}`);
    return date;
  }

  // Function to compare 2 date ranges and check for intersection between ranges
  function dateRangeIntersect(range1Start, range1End, range2Start, range2End) {
    return range1Start <= range2End && range1End >= range2Start;
  }

  function searchReservation(id) {
    try {
      const reservation = reservations.find(
        (reservation) => reservation.id === id
      );
      console.log(reservation);
      return reservation;
    } catch (error) {
      throw new Error(`Error, the reservation number: ${id} was not found!`);
    }
  }

  function getSortReservations() {
    const reservedRooms = reservations
      .filter((room) => room.hasOwnProperty("checkIn"))
      .sort((roomA, roomB) => {
        return stringToDate(roomA.checkIn) - stringToDate(roomB.checkIn);
      });
    console.log("Currently reserved rooms: ", reservedRooms);
    return reservedRooms;
  }

  function addReservation(reservation) {
    // Reservation structure
    //   {
    //    id: 1,
    //    name: "John Doe",
    //    checkIn: "01/01",
    //    checkOut: "02/01",
    //    roomNumber: 1,
    //  }

    const { checkIn, checkOut, roomNumber } = reservation;

    // Get room data
    const hotelRoom = reservations.find(
      (room) => room.roomNumber === roomNumber
    );

    // Check if room has checkin, and checkout properties if not,
    // then reserve the room

    if (
      hotelRoom.hasOwnProperty("checkIn") &&
      hotelRoom.hasOwnProperty("checkOut")
    ) {
      // Convert date string to date
      const reservationCheckIn = stringToDate(checkIn);
      const reservationCheckOut = stringToDate(checkOut);
      const hotelCheckIn = stringToDate(hotelRoom.checkIn);
      const hotelCheckOut = stringToDate(hotelRoom.checkOut);

      // If the room was reserved previously check if dates intersect
      if (
        dateRangeIntersect(
          reservationCheckIn,
          reservationCheckOut,
          hotelCheckIn,
          hotelCheckOut
        )
      ) {
        const error = new Error(
          "Error: This room is not available during this date!"
        );
        console.log(error.message);
        return error;
      }
    }

    const roomIndex = reservations.findIndex(
      (room) => room.roomNumber === roomNumber
    );

    // Overwrite array item with the new data
    reservations[roomIndex] = reservation;

    return reservations;
  }

  function removeReservation(id) {
    // Get reservation data
    const reservationIndex = reservations.findIndex(
      (reservation) => reservation.id === id
    );
    const reservation = reservations[reservationIndex];

    // Revert to default object
    reservations[reservationIndex] = { roomNumber: reservation.roomNumber };

    console.log(`Your reservation for ${reservation.name} has been cancelled`);
    return reservation;
  }

  function getReservations() {
    console.log(reservations);
    return reservations;
  }

  function getAvailableRooms(checkIn, checkOut) {
    // Convert reservation date string to date object
    checkIn = stringToDate(checkIn);
    checkOut = stringToDate(checkOut);

    // Filter rooms that are available using date object data
    const availableRooms = reservations.filter((room) => {
      // Check for props checkIn and checkOut
      if (room.hasOwnProperty("checkIn") && room.hasOwnProperty("checkOut")) {
        // then compare both date ranges and return only free rooms
        const roomCheckIn = stringToDate(room.checkIn);
        const roomCheckOut = stringToDate(room.checkOut);

        return !dateRangeIntersect(
          checkIn,
          checkOut,
          roomCheckIn,
          roomCheckOut
        );
      }
      return room;
    });

    availableRooms.forEach((room) =>
      console.log(`Room Available: ${room.roomNumber}`)
    );
    return availableRooms;
  }

  return {
    searchReservation,
    getSortReservations,
    addReservation,
    removeReservation,
    getReservations,
    getAvailableRooms,
  };
}

const hotel = hotelSystem(10);

hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.addReservation({
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "10/01",
  roomNumber: 7,
});

hotel.addReservation({
  id: 3,
  name: "Pepe Doe",
  checkIn: "02/01",
  checkOut: "04/01",
  roomNumber: 7,
});

hotel.addReservation({
  id: 4,
  name: "Meme Don",
  checkIn: "02/02",
  checkOut: "04/03",
  roomNumber: 3,
});

hotel.getReservations();
hotel.searchReservation(2);
hotel.removeReservation(2);
hotel.getReservations();
hotel.getAvailableRooms("01/01", "05/01");
hotel.getSortReservations();
