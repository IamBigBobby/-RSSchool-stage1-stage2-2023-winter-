export interface Car {
  name: string;
  color: string;
}

export interface EngineStat {
  velocity: number;
  distance: number;
}

export interface CarsArray extends Array<Car> {}
