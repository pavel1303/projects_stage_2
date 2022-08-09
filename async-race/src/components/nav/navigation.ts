import { Button } from '../btn/button';

export class Navigation {
  button: Button;

  constructor() {
    this.button = new Button();
  }

  createNav(): HTMLElement {
    const btnContainer = document.createElement('nav');
    btnContainer.className = 'nav';
    const garageBtn = this.button.createButton('Garage', 'button', 'garage-btn');
    const winnersBtn = this.button.createButton('Winners', 'button', 'winners-btn');
    garageBtn.addEventListener('click', () => {
      window.location.hash = 'garage';
    });
    winnersBtn.addEventListener('click', () => {
      window.location.hash = 'winners';
    });
    btnContainer.append(
      garageBtn,
      winnersBtn
    );
    return btnContainer;
  }
}
