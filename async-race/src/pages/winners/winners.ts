import {
  WinnersState,
  Car,
  CarWinner,
  TypeForGarageRender,
  TypeForWinnersRender,
  AppState
} from '../../interfaces/interfaces';
import { Pangination } from '../../components/pangination/pangination';
import { Button } from '../../components/btn/button';
import { Title } from '../../components/title/title';
import { Navigation } from '../../components/nav/navigation';
import { CarWinners } from '../../components/car/car__winners/carWinners';

export class Winners extends CarWinners {
  // state: WinnersState =
  //   localStorage.getItem('winnersState') !== null
  //     ? JSON.parse(localStorage.getItem('garageState') as string)
  //     : {
  //       page: 1,
  //     };

  pangination: Pangination;

  navigation: Navigation;

  title: Title;

  button: Button;

  constructor() {
    super();
    this.pangination = new Pangination();
    this.button = new Button();
    this.title = new Title();
    this.navigation = new Navigation();
  }

  renderCarTable(winners: CarWinner[] | [], cars: Car[] | []): HTMLElement {
    const carTable = document.createElement('table');
    carTable.innerHTML = `
        <thead>
            <tr>
                <th>Number</th>
                <th>Car</th>
                <th>Name</th>
                <th>Wins</th>
                <th>Best time (seconds)</th>
            </tr>
        </thead>
    `;
    carTable.className = 'car-table';
    let currentCar: Car;
    if (winners.length !== 0) {
      winners.forEach((winner, i) => {
        if (cars.length === 0) return;
        cars.forEach((car) => {
          if (winner.id === car.id) {
            currentCar = car;
          }
        });
        
        carTable.append(this.createCar(winner, currentCar, i + 1));
      });
    } else {
      carTable.append(document.createElement('tbody'));
    }

    return carTable;
  }

  renderPage(getCarsResponse: TypeForGarageRender, getWinnersCarsResponse: TypeForWinnersRender, state: AppState): void {
    try {
      const winCars = getWinnersCarsResponse?.winners || [];
      const cars = getCarsResponse?.cars || [];
      const countWin = getWinnersCarsResponse?.count;

      document.body.innerHTML = '';

      const page = window.location.hash.replace(/[^0-9]/g, '') || '1';
      const header = document.createElement('header');
      header.append(this.title.createTitle('Async Race', 'title', 1));
      header.append(this.navigation.createNav(`${state.pageWinners}`));

      const main = document.createElement('main');
      const carTable = this.renderCarTable(winCars, cars) || document.createElement('div');
      main.append(
        this.title.createTitle(`Winners (${countWin})`, 'title', 2),
        this.title.createTitle(`Page #${page}`, 'title', 3),
        carTable,
        this.pangination.createPangination()
      );

      const container = document.createElement('div');
      container.append(header, main);
      document.body.append(container);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
}
