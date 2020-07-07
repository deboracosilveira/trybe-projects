/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

function animalsByIds(...ids) {
  if (!ids) return [];
  return ids.map(id => data.animals.find(animal => animal.id === id));
}

function animalsOlderThan(animal, age) {
  return data.animals.find(a => a.name === animal)
  .residents.every(resident => resident.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  const findEmployees = data.employees.find(employee =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return findEmployees;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  return data.animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce((acc, curr) => acc + (entrants[curr] * data.prices[curr]), 0);
}

function findAnimal(location) {
  return data.animals.filter(animal => animal.location === location)
  .map(animal => animal.name);
}

function findNames(animal, sex) {
  const animals = data.animals.find(a => a.name === animal);
  const { residents } = animals;
  const animalsArr = residents.map(a => a.name);

  if (sex) {
    const animalsBySexArr = residents.filter(a => a.sex === sex);
    return animalsBySexArr.map(a => a.name);
  }
  return animalsArr;
}

const obj = data.animals.reduce((acc, { location }) => {
  acc[`${location}`] = [];
  return acc;
}, {});

function animalMap(options) {
  Object.keys(obj).forEach((key) => {
    obj[key] = findAnimal(key);
  });
  if (!options) return obj;
  if (options.includeNames) {
    Object.keys(obj).forEach((key) => {
      const animalNames = [];
      findAnimal(key).forEach((animal) => {
        const animalObj = {};
        const sex = options.sex;
        if (options.sex) {
          animalObj[animal] = findNames(animal, sex);
        } else if (options.sorted) {
          animalObj[animal] = findNames(animal).sort();
        } else {
          animalObj[animal] = findNames(animal);
        }
        animalNames.push(animalObj);
      });
      obj[key] = animalNames;
    });
    return obj;
  }
  return obj;
}

function schedule(dayName) {
  const openingHours = Object.assign({}, data.hours);
  Object.keys(openingHours).forEach((key) => {
    const open = openingHours[key].open;
    const close = openingHours[key].close;

    if (open === 0 || close === 0) openingHours[key] = 'CLOSED';
    else openingHours[key] = `Open from ${open}am until ${close - 12}pm`;
  });
  if (!dayName) return openingHours;

  return {
    [dayName]: openingHours[dayName],
  };
}

function oldestFromFirstSpecies(id) {
  const firstSpecies = data.employees.find(employee => employee.id === id).responsibleFor[0];
  const animals = data.animals.find(animal => animal.id === firstSpecies).residents;
  const older = animals.reduce((acc, curr) => (acc.age > curr.age ? acc : curr), []);

  return Object.values(older);
}

function increasePrices(percentage) {
  const result = Object.entries(data.prices).reduce((acc, curr) => {
    acc[curr[0]] = Number((curr[1] * ((percentage / 100) + 1.00001)).toFixed(2));
    return acc;
  }, {});

  data.prices = result;
}

function employeeCoverage(idOrName) {
  function find(arr) {
    return arr.map(id => data.animals.find(element => element.id === id).name);
  }

  function findEmployee(info) {
    const employeeObj = data.employees.find(employee =>
      employee.id === info ||
      employee.firstName === info ||
      employee.lastName === info,
      );
    return employeeObj;
  }
  const result = data.employees.reduce((acc, { firstName, lastName, responsibleFor }) => {
    acc[`${firstName} ${lastName}`] = find(responsibleFor);
    return acc;
  }, {});

  if (!idOrName) return result;

  const employeeInfo = {};
  const { firstName, lastName, responsibleFor } = findEmployee(idOrName);
  employeeInfo[`${firstName} ${lastName}`] = find(responsibleFor);
  return employeeInfo;
}


const test = {
  chave: "debora",
  chave2: "lucas"
}

console.log(Object.keys(test))
module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
