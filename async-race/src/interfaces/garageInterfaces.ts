export interface Car {
  name: string;
  color: string;
}

export interface CarsArray extends Array<Car> {}
