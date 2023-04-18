function removeDuplicates(values) {
  // Tu código aquí 👈
  const set = new Set();

  for (let item of values) {
    if (!set.has(item)) {
      set.add(item);
    }
  }
  return Array.from(set);
}

// TESTS

const fruits = [
  "melon",
  "melon",
  "mango",
  "banana",
  "apple",
  "banana",
  "apple",
];

console.log(removeDuplicates(fruits));

const numbers = [1, 2, 3, 1, 2, 3];

console.log(removeDuplicates(numbers));
