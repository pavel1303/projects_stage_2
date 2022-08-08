import { Button } from '../btn/button';

export class Navigation {
  button: Button;

  constructor() {
    this.button = new Button();
  }

  createNav(): HTMLElement {
    const btnContainer = document.createElement('nav');
    btnContainer.className = 'nav';
    btnContainer.append(
      this.button.createButton('Garage', 'button', 'garage-btn'),
      this.button.createButton('Winners', 'button', 'winners-btn')
    );
    return btnContainer;
  }
}
