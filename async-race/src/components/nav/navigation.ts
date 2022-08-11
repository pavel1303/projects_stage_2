import { Button } from '../btn/button';

export class Navigation {
  button: Button;

  constructor() {
    this.button = new Button();
  }

  createNav(page: string): HTMLElement {
    const btnContainer = document.createElement('nav');
    btnContainer.className = 'nav';
    const garageBtn = this.button.createButton('Garage', 'button', 'garage-btn');
    const winnersBtn = this.button.createButton('Winners', 'button', 'winners-btn');
    garageBtn.addEventListener('click', () => {
      window.location.hash = 'garage-' + page;
    });
    winnersBtn.addEventListener('click', () => {
      window.location.hash = 'winners-' + page;
    });
    btnContainer.append(
      garageBtn,
      winnersBtn
    );
    return btnContainer;
  }
}
