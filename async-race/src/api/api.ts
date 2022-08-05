import { Car, ParamsCar, EngineCar, CarWinner, ParamsWinner } from '../interfaces/interfaces';

const BASE_URL = 'http://127.0.0.1:3000';
const GARAGE_LIMIT = 7;
const WINNERS_LIMIT = 10;

export const getCars = async (
  page = 1
): Promise<{ cars: Car[]; count: string } | void> => {
  try {
    const response = await fetch(
      `${BASE_URL}/garage?_page=${page}&_limit=${GARAGE_LIMIT}`
    );
    const cars: Car[] = await response.json();
    return {
      cars,
      count: response.headers.get('X-Total-Count') || '0',
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const getCar = async (carId: number): Promise<Car | object> => {
  try {
    const response = await fetch(`${BASE_URL}/garage/${carId}`);
    const car: Car = await response.json();
    return car;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return new Object();
  }
};

export const createCar = async (carParams: ParamsCar): Promise<void> => {
  try {
    await fetch(`${BASE_URL}/garage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carParams),
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const deleteCar = async (carId: number): Promise<void> => {
  try {
    await fetch(`$${BASE_URL}/garage/${carId}`, {
      method: 'DELETE',
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const updateCar = async (
  carId: number,
  newParams: ParamsCar
): Promise<void> => {
  try {
    await fetch(`${BASE_URL}/garage/${carId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newParams),
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const toggleEngineCar = async (
  idCar: number,
  status: 'started' | 'stopped'
): Promise<EngineCar | void> => {
  try {
    const response = await fetch(
      `${BASE_URL}/engine?id=${idCar}&status=${status}`,
      {
        method: 'PATCH',
      }
    );
    const engine: EngineCar = await response.json();
    return engine;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const switchDriveMode = async (
  idCar: number,
  status: 'drive'
): Promise<number | void> => {
  try {
    const response = await fetch(
      `${BASE_URL}/engine?id=${idCar}&status=${status}`,
      {
        method: 'PATCH',
      }
    );
    const responseStatus = response.status;
    return responseStatus;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const getWinners = async (
  sort: 'id' | 'wins' | 'time',
  order: 'ASC' | 'DESC',
  page = 1
): Promise<{ winners: CarWinner[]; count: string } | void> => {
  try {
    const response = await fetch(
      `${BASE_URL}/winners?_page=${page}&_limit=${WINNERS_LIMIT}&_sort=${sort}&_order=${order}`
    );
    const winnersCars: CarWinner[] = await response.json();
    return {
      winners: winnersCars,
      count: response.headers.get('X-Total-Count') || '0',
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const getWinner = async (idCar: number): Promise<CarWinner | object> => {
  try {
    const response = await fetch(`${BASE_URL}/winners/${idCar}`);
    const winnerCar = await response.json();
    return winnerCar;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return new Object();
  }
};

export const createWinner = async (winnerParams: ParamsWinner): Promise<void> => {
  try {
    await fetch(`${BASE_URL}/winners`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(winnerParams),
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const deleteWinner = async (carId: number): Promise<void> => {
  try {
    await fetch(`$${BASE_URL}/winners/${carId}`, {
      method: 'DELETE',
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const updateWinner = async (
  carId: number,
  newParams: ParamsWinner
): Promise<void> => {
  try {
    await fetch(`${BASE_URL}/winners/${carId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newParams),
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};