import { CarWinner, Car } from '../../../interfaces/interfaces';

export class CarWinners {
  createCarItem(color: string): HTMLElement {
    const carItem = document.createElement('div');
    carItem.className = 'car-img-winner';
    carItem.innerHTML = `
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
  <g>
     <g>
         <g>
             <path d="M469.333,264.534H512v-23.842c0-15.087-12.271-27.358-27.358-27.358h-80.043l-91.366-91.366
                 c-3.337-3.337-8.73-3.337-12.066,0c-3.336,3.337-3.336,
                 8.73,0,12.066l79.3,79.3h-81.801v-25.6c0-4.719-3.814-8.533-8.533-8.533
                 s-8.533,3.814-8.533,8.533v25.6h-59.733v-25.6c0-4.719-3.814-8.533-8.533-8.533c-4.719,0-8.533,
                 3.814-8.533,8.533v25.6h-59.733
                 v-34.133c0-14.114-11.486-25.6-25.6-25.6s-25.6,
                 11.486-25.6,25.6v34.133H27.358C12.271,213.334,0,225.605,0,240.692v23.842
                 h42.667c4.719,0,8.533,3.814,8.533,8.533s-3.814,8.533-8.533,
                 8.533H0v32.375c0,15.087,12.271,27.358,27.358,27.358h15.992
                 c4.164,28.894,29.022,51.2,59.051,51.2s54.886-22.306,
                 59.051-51.2h189.099c4.164,28.894,29.022,51.2,59.051,51.2
                 s54.886-22.306,59.051-51.2h15.991c15.087,0,27.358-12.271,
                 27.358-27.358v-32.375h-42.667c-4.719,0-8.533-3.814-8.533-8.533
                 S464.614,264.534,469.333,264.534z M110.933,179.201c0-4.71,
                 3.823-8.533,8.533-8.533s8.533,3.823,8.533,8.533v34.133h-17.067
                 V179.201z M102.4,375.468c-23.526,0-42.667-19.14-42.667-42.667c0-23.526,19.14-42.667,42.667-42.667
                 c23.526,0,42.667,19.14,42.667,42.667C145.067,356.327,125.926,375.468,102.4,375.468z M307.2,281.601
                 c0,4.719-3.814,8.533-8.533,8.533s-8.533-3.814-8.533-8.533v-8.533H256c-4.719,0-8.533-3.814-8.533-8.533
                 s3.814-8.533,8.533-8.533h42.667c4.719,0,8.533,3.814,8.533,
                 8.533V281.601z M409.6,375.468c-23.526,0-42.667-19.14-42.667-42.667
                 c0-23.526,19.14-42.667,42.667-42.667c23.526,0,42.667,19.14,42.667,
                 42.667C452.267,356.327,433.126,375.468,409.6,375.468z" fill='${color}' stroke='white' stroke-width='7'/>
         </g>
     </g>
  </g>
  </svg>
      `;
    return carItem;
  }

  createCar(
    { wins, time }: CarWinner,
    car: Car,
    numCar: number
  ): HTMLElement {
    const tr = document.createElement('tr');
    ['Number', 'Car', 'Name', 'Wins', 'Best time (seconds)'].forEach((item) => {
      const td = document.createElement('td');
      switch (item) {
        case 'Number':
          td.innerHTML = `${numCar}`;
          break;
        case 'Car':
          td.append(this.createCarItem(car.color));
          break;
        case 'Name':
          td.innerHTML = `${car.name}`;
          break;
        case 'Wins':
          td.innerHTML = `${wins}`;
          break;
        case 'Best time (seconds)':
          td.innerHTML = `${time}`;
          break;
      }
      tr.append(td);
    });
    return tr;
  }
}
