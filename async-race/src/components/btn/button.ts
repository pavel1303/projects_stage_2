import {
  createCar,
  deleteCar,
  deleteWinner,
  getCar,
  updateCar,
} from '../../api/api';
import { Car } from '../../interfaces/interfaces';

export class Button {
  selectCarid = {
    id: '-1',
  };

  createButton(name: string, className: string, id: string): HTMLElement {
    const btn = document.createElement('div');
    btn.className = className;
    btn.innerHTML = name;
    btn.id = id;
    this.addListeners(btn, name);
    return btn;
  }

  addListeners(btn: HTMLElement | Node, btnName: string) {
    switch (btnName) {
      case 'Create':
        btn.addEventListener('click', this.createBtnHandler);
        break;
      case 'Update':
        btn.addEventListener('click', async () => {
          this.updateCarBtn();
        });
        break;
      case 'Generate cars':
        btn.addEventListener('click', async () => {
          this.gen100Cars();
        });
        break;
    }
  }

  createBtnHandler() {
    const nameNewCar = (
      document.querySelector('#gen-car-text-inp') as HTMLInputElement
    ).value;
    const colorNewCar = (
      document.querySelector('#gen-car-color-inp') as HTMLInputElement
    ).value;
    const data = {
      name: nameNewCar,
      color: colorNewCar,
    };
    createCar(data);
    window.location.reload();
  }

  async selectBtnHandler(el: HTMLElement) {
    let parent = el.parentNode as HTMLElement;
    while (parent.className !== 'car-item') {
      if (parent.parentNode === null) return;
      parent = parent.parentNode as HTMLElement;
    }
    const idCar = parent.id as string;
    this.selectCarid.id = idCar;
    const car = (await getCar(+idCar)) as Car;
    (document.querySelector('#change-car-text-inp') as HTMLInputElement).value =
      car.name;
    (
      document.querySelector('#change-car-color-inp') as HTMLInputElement
    ).value = car.color;
  }

  updateCarBtn() {
    if (this.selectCarid.id !== '-1') {
      const nameNewCar = (
        document.querySelector('#change-car-text-inp') as HTMLInputElement
      ).value;
      const colorNewCar = (
        document.querySelector('#change-car-color-inp') as HTMLInputElement
      ).value;
      const data = {
        name: nameNewCar,
        color: colorNewCar,
      };
      updateCar(+this.selectCarid.id, data);
    } else {
      alert('Необходимо выбрать авто для изменения');
    }
    this.selectCarid.id = '-1';
    window.location.reload();
    return;
  }

  deleteCarBtn(el: HTMLElement) {
    let parent = el.parentNode as HTMLElement;
    while (parent.className !== 'car-item') {
      if (parent.parentNode === null) return;
      parent = parent.parentNode as HTMLElement;
    }
    const idCar = parent.id as string;
    deleteCar(+idCar);
    deleteWinner(+idCar);
    window.location.reload();
  }

  async gen100Cars() {
    let countCars = 100;
    const firstNameCar = [
      'Toyota',
      'Lexus',
      'Lamborghini',
      'Audi',
      'Land Rover',
      'Mitsubishi',
      'Infiniti',
      'BMW',
      'Mercedes-Benz',
      'Mazda',
    ];
    const secondNameCar = [
      'Camri',
      'LX',
      'URUS',
      'FREELANDER',
      'TT',
      'Lancer',
      'Q70',
      'M5',
      'GLC',
      '6',
    ];
    while (countCars !== 0) {
      const randomColor =
        '#' + (Math.random().toString(16) + '000000').substring(2, 8);
      const nameCar =
        firstNameCar[Math.floor(Math.random() * 10)] + ' ' + secondNameCar[Math.floor(Math.random() * 10)];
      await createCar({
        name: nameCar,
        color: randomColor,
      });
      countCars--;
    }
    window.location.reload();
  }
}
