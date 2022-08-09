import { Garage } from './pages/garage/garage';
import { getCars, getWinners } from './api/api';
import { Winners } from './pages/winners/winners';
// import { TypeForGarageRender, TypeForWinnersRender } from './interfaces/interfaces';

export const startApp = () => {
  const winnersView = new Winners();
  const garageView = new Garage();
  document.addEventListener('DOMContentLoaded', async () => {
    const cars = await getCars();
    const winCars = await getWinners('wins', 'ASC');
    const actualHash = window.location.hash.slice(1);
    switch (actualHash) {
      case 'garage':
        garageView.renderPage(cars);
        break;
      case 'winners':
        winnersView.renderPage(cars, winCars);
        break;
      default:
        garageView.renderPage(cars);
    }
  });
  window.addEventListener('hashchange', async () => {
    const cars = await getCars();
    const winCars = await getWinners('wins', 'ASC');
    const actualHash = window.location.hash.slice(1);
    switch (actualHash) {
      case 'garage':
        garageView.renderPage(cars);
        break;
      case 'winners':
        winnersView.renderPage(cars, winCars);
        break;
    }
  });
};
