const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const checkedId = persons.find(item => item.id === id);
      if (checkedId) {
        resolve(checkedId);
      } else {
        reject(new Error("Person Id not found"));
      }
    }, 1000);
  });
}

fetchPersonById(1)
.then((resolve) => console.log(resolve))
.catch((err) => console.log(err));


