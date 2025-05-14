// Updating Objects

const person = { address: { city: "Gondar", country: "ET" }, name: "John" };

const updatedPerson = {
  ...person,
  address: {
    ...person.address,
    city: "NY",
    country: "USA",
  },
  name: "Doe",
  age: 28,
};

console.log(updatedPerson);

// Updating Arrays

const numbers = [1, 2, 3];
// adding
const index = numbers.indexOf(2);
const adding = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

// Removing
const removed = numbers.filter((n) => n !== 2);

// Updating
const updated = numbers.map((n) => (n === 2 ? 20 : n));

console.log(updated);
