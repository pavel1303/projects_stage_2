import { Garage } from './pages/garage/garage';
import { getCars, getWinners } from './api/api';
import { Winners } from './pages/winners/winners';
import { AppState } from './interfaces/interfaces';

export class Controller {

  state: AppState;

  garageView: Garage;

  winnersView: Winners;

  constructor() {
    this.garageView = new Garage();
    this.winnersView = new Winners();
    this.state = JSON.parse(localStorage.getItem('state') as string) || {
      sort:  'wins',
      sortOrder: 'ASC',
      pageGarage: 1,
      pageWinners: 1,
    };
  }

  startApp() {
    document.addEventListener('DOMContentLoaded', async () => {
      const cars = await getCars(this.state.pageGarage);
      const winCars = await getWinners(this.state.sort, this.state.sortOrder);
      const actualHash = window.location.hash.slice(1).replace(/[^a-zA-Z]/g, '');
      if (actualHash === '') window.location.hash = 'garage';
      switch (actualHash) {
        case 'garage':
          this.garageView.renderPage(cars, this.state);
          break;
        case 'winners':
          this.winnersView.renderPage(cars, winCars, this.state);
          break;
      }
    });
    window.addEventListener('hashchange', async () => {
      const cars = await getCars(this.state.pageGarage);
      const winCars = await getWinners('wins', 'ASC');
      const actualHash = window.location.hash.slice(1).replace(/[^a-zA-Z]/g, '');
      const actualPage = window.location.hash.replace(/[^0-9]/g, '') || '1';
      switch (actualHash) {
        case 'garage':
          this.garageView.renderPage(cars, this.state);
          this.state.pageGarage = +actualPage;
          break;
        case 'winners':
          this.winnersView.renderPage(cars, winCars, this.state);
          this.state.pageWinners = +actualPage;
          break;
      }
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }  
}

