import { Button } from '../btn/button';
export class Pangination {
  button: Button;

  constructor() {
    this.button = new Button();
  }

  createPangination(): HTMLElement {
    const pangination = document.createElement('div');
    pangination.className = 'pangination';
    pangination.append(
      this.button.createButton('Prev', 'button', 'pang-prev'),
      this.button.createButton('Next', 'button', 'pang-next')
    );
    return pangination;
  }
}
