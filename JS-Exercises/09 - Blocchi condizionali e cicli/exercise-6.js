function getKeys(obj) {
  if (typeof obj === `object`) {
    return Object.keys(obj);
  } else {
    return `WARNING: Your item is not an object!`;
  }
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  city: "Rome",
  job: "Developer",
};

const keys = getKeys(person);
console.log(keys);
