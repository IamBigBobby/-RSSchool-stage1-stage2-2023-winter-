export interface WinCar {
  id: number;
  wins: number;
  time: number;
}

export interface WinCarsArray extends Array<WinCar> {}
