import { Garage } from './pages/garage/garage';
import { getCars } from './api/api';

export const startApp = () => {
  const garageView = new Garage();
  document.addEventListener('DOMContentLoaded', async () => {
    const cars = await getCars();
    garageView.renderPage(cars);
  });
};
