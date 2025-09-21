import {
  cars,
  findById,
  addCar,
  removeCar,
  listCars,
  updateCar
} from '../src/cars.js';

describe('Car functions', () => {
  beforeEach(() => {
    cars.length = 0;
    cars.push(
      { id: 1, model: 'Gol', brand: 'Volkswagen', year: 2020 },
      { id: 2, model: 'Onix', brand: 'Chevrolet', year: 2021 },
      { id: 3, model: 'Fiesta', brand: 'Ford', year: 2019 }
    );
  });

  test('listCars returns all cars', () => {
    expect(listCars()).toHaveLength(3);
  });

  test('findById returns the correct car', () => {
    expect(findById(2)).toEqual({ id: 2, model: 'Onix', brand: 'Chevrolet', year: 2021 });
  });

  test('addCar adds a new car', () => {
    const newCar = { id: 4, model: 'Civic', brand: 'Honda', year: 2022 };
    addCar(newCar);
    expect(cars).toContainEqual(newCar);
    expect(listCars()).toHaveLength(4);
  });

  test('removeCar removes the car by id', () => {
    const removed = removeCar(1);
    expect(removed).toEqual({ id: 1, model: 'Gol', brand: 'Volkswagen', year: 2020 });
    expect(listCars()).toHaveLength(2);
  });

  test('updateCar changes the car data', () => {
    const updated = updateCar(3, { model: 'Fiesta New', year: 2023 });
    expect(updated).toEqual({ id: 3, model: 'Fiesta New', brand: 'Ford', year: 2023 });
    expect(findById(3).model).toBe('Fiesta New');
  });
});