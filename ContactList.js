class ContactList {
  constructor(size) {
    // Tu código aquí 👈
    this.contacts = new Array(size);
    this.numBuckets = this.contacts.length;
  }

  hash(name) {
    let total = 0;
    for (let i = 0; i < name.length; i++) {
      total += name.charCodeAt(i);
    }
    return total % this.numBuckets;
  }

  insert(name, phone) {
    // Tu código aquí 👈
    const index = this.hash(name);

    if (!this.contacts[index]) this.contacts[index] = [];

    this.contacts[index].push([name, phone]);
  }

  get(name) {
    // Tu código aquí 👈
    const index = this.hash(name);
    const bucket = this.contacts[index];

    if (!bucket) return undefined;
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === name) return bucket[i][1];
    }
    return undefined;
  }

  retrieveAll() {
    // Tu código aquí 👈
    const retrievedContacts = [];
    this.contacts.forEach((contact) => {
      if (!contact) return;
      contact.forEach((pair) => retrievedContacts.push(pair));
    });
    return retrievedContacts;
  }

  delete(name) {
    // Tu código aquí 👈
    const index = this.hash(name);
    const bucket = this.contacts[index];
    if (!bucket) return undefined;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === name) {
        const deletedPair = bucket.splice(i, 1)[0];
        return deletedPair;
      }
    }
    return undefined;
  }
}

// TESTS

const contactList = new ContactList(10);
contactList.insert("Mr michi", "123-456-7890");
contactList.insert("Mr Michi", "123-456-7891");

console.log(contactList.retrieveAll());
console.log(contactList.get("Mr Michi")); // M and m have differnte ASCII codes
console.log(contactList.get("Mr michi"));
