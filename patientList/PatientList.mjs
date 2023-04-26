import { Patient } from "./Node.mjs";

class PatientList {
  constructor(beds) {
    // Tu código aquí 👈🏻
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.beds = Array(beds).fill(true);
  }

  addPatient(name, age) {
    // Tu código aquí 👈🏻
    if (this.length === this.beds.length) return "No free beds";

    const freeBed = this.beds.findIndex((bed) => bed);
    this.beds[freeBed] = false;

    const newPatient = new Patient(name, age);
    newPatient.bedNumber = freeBed + 1;

    if (!this.head) {
      this.head = newPatient;
      this.tail = newPatient;
    } else {
      this.tail.next = newPatient;
      this.tail = newPatient;
    }
    this.length++;
  }

  removePatient(name) {
    // Tu código aquí 👈🏻
    if (!this.head) return null;

    let current = this.head;
    let prev = null;
    while (current) {
      if (name === current.name) {
        if (current === this.head) {
          this.beds[current.bedNumber - 1] = true;
          this.head = this.head.next;
        } else if (current === this.tail) {
          this.beds[current.bedNumber - 1] = true;
          this.tail = prev;
          prev.next = null;
        } else {
          prev.next = current.next;
        }
        this.length--;
        return current;
      }
      prev = current;
      current = current.next;
    }
    return null;
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
    while (currentPatient) {
      const patientData = {
        name: currentPatient.name,
        age: currentPatient.age,
        bedNumber: currentPatient.bedNumber,
      };
      array.push(patientData);
      currentPatient = currentPatient.next;
    }
    return array;
  }

  getAvailableBeds() {
    // Tu código aquí 👈🏻
    return `Beds available: ${this.length - this.beds.length}`;
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

list.addPatient("Paciente 4", 50);
console.log(list.getPatientList());
console.log(list.getAvailableBeds());
