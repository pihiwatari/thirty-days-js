import { Patient } from "./Node.mjs";

class PatientList {
  constructor(beds) {
    // Tu código aquí 👈🏻
    this.head = null;
    this.tail = null;
    this.beds = beds; // = total beds available
    this.currentFreeBed = 1;
  }

  searchFreeBed() {
    if (this.beds === 0) throw Error("No free beds found");
    if (this.currentFreeBed === 1) return this.currentFreeBed;

    let currentPatient = this.head;
    while (currentPatient) {
      // If there is no name return bedNumber
      if (!currentPatient.name && !currentPatient.age) {
        this.currentFreeBed = currentPatient.bedNumber;
        return this.currentFreeBed;
      }

      currentPatient = currentPatient.next;
    }
  }

  addPatient(name, age) {
    // Tu código aquí 👈🏻
    const newPatient = new Patient(name, age);

    newPatient.bedNumber = this.searchFreeBed();

    // If the list if empty we add a new patient and reduce
    // the beds available while increasing the length of the list.
    if (!this.head) {
      this.head = newPatient;
      this.tail = newPatient;
      this.beds--;
      this.currentFreeBed++;
      return;
    }

    // If there were any patient added before, assign that bed first
  }

  removePatient(name) {
    // Tu código aquí 👈🏻
    if (!this.head) return null;

    let currentPatient = this.head;
    let prevPatient = null;

    while (currentPatient) {
      if (currentPatient.name === name) {
        if (currentPatient === this.head) {
          this.head = this.head.next;
          this.beds++;
        } else if (currentPatient === this.tail) {
          this.tail = prevPatient;
          prevPatient.next = null;
          this.beds++;
        } else {
          prevPatient.next = currentPatient.next;
        }
      }
      // Move to next patient
      currentPatient = currentPatient.next;
    }
  }

  getPatient(name) {
    // Tu código aquí 👈🏻
    if (!this.head) {
      throw Error("No patients at the hospital");
    }

    // Check head & tail values
    if (this.head.name === name) {
      let { name, age, bedNumber } = this.head;
      return { name, age, bedNumber };
    }

    if (this.tail.name === name) {
      let { name, age, bedNumber } = this.tail;
      return { name, age, bedNumber };
    }

    let currentPatient = this.head.next;

    while (currentPatient) {
      if (currentPatient.name === name) {
        let { name, age, bedNumber } = currentPatient;
        return { name, age, bedNumber };
      }
      currentPatient = currentPatient.next;
    }

    throw Error(`Patient ${name}, not found!`);
  }

  getPatientList() {
    // Tu código aquí 👈🏻
    let array = [];
    let currentPatient = this.head;
    let i = 0;
    while (currentPatient) {
      const patientData = {
        name: currentPatient.name,
        age: currentPatient.age,
        bedNumber: currentPatient.bedNumber,
      };
      array[i] = patientData;
      currentPatient = currentPatient.next;
      i++;
    }
    return array;
  }

  getAvailableBeds() {
    // Tu código aquí 👈🏻
    return `Beds available: ${this.beds}`;
  }
}

// Tests

const list = new PatientList(3);
list.addPatient("Paciente 1", 20);
list.addPatient("Paciente 2", 30);
list.addPatient("Paciente 3", 40);

console.log(list.getPatientList());
console.log(list.getPatient("Paciente 1"));
console.log(list.getPatient("Paciente 2"));
console.log(list.getAvailableBeds());

list.removePatient("Paciente 1");
console.log(list.getPatientList());
console.log(list.getAvailableBeds());
