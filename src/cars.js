export const cars = [
  { id: 1, model: 'Gol', brand: 'Volkswagen', year: 2020 },
  { id: 2, model: 'Onix', brand: 'Chevrolet', year: 2021 },
  { id: 3, model: 'Fiesta', brand: 'Ford', year: 2019 },
];

export function findById(id) {
  return cars.find(car => car.id === id);
}

export function addCar(car) {
  cars.push(car);
  return car;
}

export function removeCar(id) {
  const index = cars.findIndex(car => car.id === id);
  if (index !== -1) {
    return cars.splice(index, 1)[0];
  }
  return null;
}

export function listCars() {
  return cars;
}

export function updateCar(id, newData) {
  const car = findById(id);
  if (car) {
    Object.assign(car, newData);
    return car;
  }
  return null;
}