import {
  Car,
  GarageState,
  TypeForGarageRender,
} from '../../interfaces/interfaces';
import { Title } from '../../components/title/title';
import { Button } from '../../components/btn/button';
import { Input } from '../../components/input/input';
import { CarGarage } from '../../components/car/car__garage/car_garage';
import { Pangination } from '../../components/pangination/pangination';
import { Navigation } from '../../components/nav/navigation';
export class Garage extends CarGarage {
  state: GarageState =
    localStorage.getItem('garageState') !== null
      ? JSON.parse(localStorage.getItem('garageState') as string)
      : {
        inputName: '',
        inputColor: 'ffffff',
        page: 1,
      };

  button: Button;

  input: Input;

  title: Title;

  pangination: Pangination;

  navigation: Navigation;

  constructor() {
    super();
    this.button = new Button();
    this.input = new Input();
    this.title = new Title();
    this.pangination = new Pangination();
    this.navigation = new Navigation();
  }

  renderGarageControl(): HTMLElement {
    const garageControl = document.createElement('div');
    garageControl.className = 'garage-control';
    const genNewCarBlock = document.createElement('div');
    const changeCarItemBlock = document.createElement('div');
    const manageGarage = document.createElement('div');
    [genNewCarBlock, changeCarItemBlock, manageGarage].forEach((el) => {
      el.className = 'manage-block';
    });
    genNewCarBlock.append(
      this.input.createInput('text', 'text-input', 'gen-car-text-inp'),
      this.input.createInput('color', 'color-input', 'gen-car-color-inp'),
      this.button.createButton('Create', 'button', 'create-car-btn')
    );
    changeCarItemBlock.append(
      this.input.createInput('text', 'text-input', 'change-car-text-inp'),
      this.input.createInput('color', 'color-input', 'change-car-color-inp'),
      this.button.createButton('Update', 'button', 'change-car-btn')
    );
    manageGarage.append(
      this.button.createButton('Race', 'button', 'start-race'),
      this.button.createButton('Reset', 'button', 'stop-race'),
      this.button.createButton('Generate cars', 'button', 'gen-cars')
    );
    garageControl.append(genNewCarBlock, changeCarItemBlock, manageGarage);
    return garageControl;
  }

  renderCarContainer(cars: Car[]): HTMLElement {
    const carContainer = document.createElement('div');
    carContainer.className = 'car-container';
    cars.forEach((car) => {
      carContainer.append(this.createCar(car));
    });
    return carContainer;
  }

  renderPage(params: TypeForGarageRender): void {
    try {
      const cars = params?.cars || [];
      const count = params?.count;

      document.body.innerHTML = '';

      const header = document.createElement('header');
      header.append(this.title.createTitle('Async Race', 'title', 1));
      header.append(this.navigation.createNav());
      const main = document.createElement('main');
      main.append(this.renderGarageControl());
      main.append(
        this.title.createTitle(`Garage (${count})`, 'title', 2),
        this.title.createTitle(`Page #${this.state.page}`, 'title', 3),
        this.renderCarContainer(cars),
        this.pangination.createPangination(),
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
