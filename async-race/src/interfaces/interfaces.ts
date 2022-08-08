export interface Car {
  name: string;
  color: string;
  id: number;
}

export interface ParamsCar {
  name: string;
  color: string;
}

export interface EngineCar {
  velocity: number;
  distance: number;
}

export interface CarWinner {
  id: number;
  wins: number;
  time: number;
}

export interface ParamsWinner {
  id?: number;
  wins: number;
  time: number;
}

export interface GarageState {
  inputName: string;
  inputColor: string;
  page: number;
}
export interface WinnersState {
  page: number;
}

export interface GetCarsResponse {
  cars: Car[];
  count: string;
}
export interface GetWinnersCarsResponse {
  carsWins: CarWinner[];
  count: string;
}

export type TypeForGarageRender = GetCarsResponse | void;
export type TypeForWinnersRender = GetWinnersCarsResponse | void;
export interface WinnersRender {
  cars: TypeForGarageRender;
  winners: TypeForWinnersRender;
}
