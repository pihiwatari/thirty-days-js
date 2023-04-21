class Node {
  // Este código no debe ser modificado ❌
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Este código no debe ser modificado ❌
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        this.length--;
        return;
      }
      currentNode = currentNode.next;
    }
  }
}

class LinkedListRecharged extends LinkedList {
  get(index) {
    // Tu código aquí 👈

    if (index < 0 || index > this.length) return null;

    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (counter === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      counter++;
    }
  }

  insertAt(index, value) {
    // Tu código aquí 👈

    // Check for head and tail position
    if (index < 0 || index >= this.length) return null;

    // Create node

    // insert node at head
    if (index === 0) this.prepend(value);
    else if (index === this.length - 1) this.append(value);
    else {
      const newNode = new Node(value);
      const prevNode = this.get(index - 1);

      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;

      return newNode;
    }
  }

  toArray() {
    // Tu código aquí 👈
    let arrayFromLinkedList = new Array(this.length);
    let currentNode = this.head;
    let i = 0;
    while (currentNode) {
      arrayFromLinkedList[i] = currentNode.value;
      currentNode = currentNode.next;
      i++;
    }
    console.log(arrayFromLinkedList);
    return arrayFromLinkedList;
  }

  removeAt(index) {
    // Tu código aquí 👈

    if (index < 0 || index >= this.length) return null;

    if (index === 0 || index === this.length - 1) {
      const deletedNode = this.get(index);
      this.delete(deletedNode.value);
      return deletedNode;
    } else {
      const prevNode = this.get(index - 1);
      const removedNode = prevNode.next;
      const realocatedNode = removedNode.next;

      prevNode.next = realocatedNode;
      this.length--;
      return removedNode.value;
    }
  }
}

const linkedList = new LinkedListRecharged();

linkedList.append("30");
linkedList.append("Días");
linkedList.append("De javascript");
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.get(1);
linkedList.insertAt(1, 5);
const array1 = linkedList.toArray();
linkedList.insertAt(0, "Primer nodo");
const array2 = linkedList.toArray();
linkedList.removeAt(1);
const array3 = linkedList.toArray();
linkedList.removeAt(0);
linkedList.removeAt(linkedList.length - 1);
const array4 = linkedList.toArray();
