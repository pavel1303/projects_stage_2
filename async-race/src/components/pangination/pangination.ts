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
    pangination.addEventListener('click', (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.id !== 'pang-prev' && target.id !== 'pang-next') return;
      this.switchPage(target.id);
    });
    return pangination;
  }

  switchPage(id: string) {
    const actualHash = window.location.hash.replace(/[^a-zA-Z]/g, '');
    const actualPage = window.location.hash.replace(/[^0-9]/g, '') || '1';
    if (id === 'pang-prev') {
      window.location.hash = actualHash + '-' + (+actualPage - 1);
    } else {
      window.location.hash = actualHash + '-' + (+actualPage + 1);
    }
    window.location.reload();
  }
}
