class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // Add to the end of the stack
  push(value) {
    const newNode = new Node(value);

    // If the stack is empty
    if (this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // Reference top to newNode.next
      newNode.next = this.top;

      // newNode becomes top
      this.top = newNode;
    }

    this.length++;
    return this;
  }

  // Delete last item from stack
  // My solution
  // pop() {
  //   if (this.length === 0) return null;

  //   const deletedNode = this.top.value;

  //   if (this.top === this.bottom) {
  //     this.top = null;
  //     this.bottom = null;
  //     this.length--;
  //     return deletedNode;
  //   }

  //   this.top = this.top.next;
  //   let currentNode = this.top;

  //   while (currentNode) {
  //     if (currentNode.next === null) {
  //       this.bottom = currentNode;
  //     }
  //     currentNode = currentNode.next;
  //   }

  //   this.length--;
  //   return deletedNode;
  // }

  // Refactored pop method

  pop() {
    if (this.length === 0) return null;

    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }

    this.length--;
    return this;
  }

  // Return last element
  peek() {
    return this.top ? this.top.value : null;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);

stack.pop();
stack.pop();
console.log(stack.peek());
console.log(stack);
stack.pop();
console.log(stack);
