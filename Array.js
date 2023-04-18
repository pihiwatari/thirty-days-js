class MyArray {
  constructor() {
    // Tu código aquí 👈
    this.data = {};
    this.length = 0;
  }

  map(func) {
    // Tu código aquí 👈
    if (!typeof func === "function") throw TypeError("Not a function");

    let A = new MyArray();
    let k = 0;

    while (k < this.length) {
      let Pk = k;
      let kPresent = this.data[Pk];

      if (kPresent) {
        let kValue = this.data[Pk];
        let mappedValue = func(kValue);
        A.push(mappedValue);
      }
      k++;
    }
    return A;
  }

  filter(func) {
    // Tu código aquí 👈
    if (!typeof func === "function") throw TypeError("Not a function");
    let A = new MyArray();
    let k = 0;

    while (k < this.length) {
      let Pk = k;
      let kPresent = this.data[Pk];

      if (kPresent) {
        let kValue = this.data[Pk];
        let selected = Boolean(func(kValue));
        if (selected) {
          A.push(kValue);
        }
      }
      k++;
    }
    return A;
  }

  push(item) {
    // Tu código aquí 👈
    this.data[this.length] = item;
    this.length++;
    return this.data[this.length - 1];
  }

  pop() {
    // Tu código aquí 👈
    if (this.length === 0) return undefined;

    const deleted = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return deleted;
  }

  join(character = ",") {
    // Tu código aquí 👈
    if (this.length === 0) return "";

    let R = "";
    let k = 0;
    while (k < this.length) {
      if (k > 0) R += character;

      let element = this.data[k];

      let next =
        element === undefined || element === null ? "" : element.toString();

      R += next;

      k++;
    }
    return R;
  }

  shift() {
    // Tu código aquí 👈
    if (this.length === 0) return undefined;

    let first = this.data[0]; // copy item at index"0": 1
    let k = 1;

    while (k < this.length) {
      // k from runs from index 1 to 2
      let from = k; // 1
      let to = k - 1; // 0
      let fromPresent = this.data[from]; // new var"1":2
      if (fromPresent) {
        // if there is a value here
        let fromVal = this.data[from]; // new var"1":2
        this.data[to] = fromVal; // data {"0": 2}, was {"0": 1}
      } else {
        delete this.data[to]; // if there is no value, delete prev index
      }
      k++;
    }

    delete this.data[this.length - 1]; // delete last node
    this.length--; // reduce length by 1
    return first; // return compy of first item
  }

  unshift(item) {
    // Tu código aquí 👈
    let argCount = arguments.length;

    if (argCount > 0) {
      if (argCount >= 2 ** 53) throw TypeError("Tooooo many arguments");
      let k = this.length;

      while (k > 0) {
        let from = k - 1;
        let to = k + argCount - 1;
        let fromPresent = this.data[from];
        if (fromPresent) {
          let fromValue = this.data[from];
          this.data[to] = fromValue;
        } else {
          delete this.data[to];
        }
        k--;
      }

      let j = 0;
      for (let i of arguments) {
        this.data[j] = i;
        j++;
      }
    }
    this.length += argCount;
    return this.length;
  }
}

// TESTS

const myArray = new MyArray();

console.log("Array length: ", myArray.length);

myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push("Objeto eliminado con pop");

console.log("Pushed data: ", myArray.data);

console.log("Array length: ", myArray.length);

let deleted = myArray.pop();
console.log("Popped data: ", deleted);

const joinedData = myArray.join(" ");
console.log("Joined data: ", joinedData);

deleted = "Objeto agregado, despues de ser eliminado";
myArray.push(deleted);
console.log("Agregado: ", deleted);
console.log("before shift", myArray.data);
let shifted = myArray.shift();
console.log(
  `Shifted item at index 0: ${shifted}, \n`,
  "Shifted data: ",
  myArray.data
);

console.log("Array length: ", myArray.length);

myArray.unshift("5", 6);
console.log("After unshift: ", myArray);
console.log("Unshifted length: ", myArray.length);

const mappedArray = myArray.map((x) => x * 2);
console.log("myArray", myArray);
console.log("mappedArray", mappedArray);

const filteredArray = myArray.filter((x) => x % 2 == 0);
console.log(filteredArray);
