export interface Car {
  name: string;
  color: string;
}

export interface EngineStat {
  velocity: number;
  distance: number;
}

export interface DriveModeStatus {
  success: boolean;
}

export interface CarsArray extends Array<Car> {}

export interface MoveCarResult {
  time: string;
  winCar: string | null;
}

export interface newCar {
  name: string;
  color: string;
}