import { Button } from '../../btn/button';
import { Car } from '../../../interfaces/interfaces';

export class CarGarage {
  flag: string;

  button: Button;

  constructor() {
    this.button = new Button();
    this.flag = `<div class='flag'>
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 447.514 447.514" style="enable-background:new 0 0 447.514 447.514;" xml:space="preserve">
<path d="M389.183,10.118c-3.536-2.215-7.963-2.455-11.718-0.634l-50.653,24.559c-35.906,17.409-77.917,16.884-113.377-1.418
   c-38.094-19.662-83.542-18.72-120.789,2.487V20c0-11.046-8.954-20-20-20s-20,8.954-20,20v407.514c0,11.046,8.954,20,20,20
   s20-8.954,20-20V220.861c37.246-21.207,82.694-22.148,120.789-2.487c35.46,18.302,
   77.47,18.827,113.377,1.418l56.059-27.18
   c7.336-3.557,11.995-10.993,11.995-19.146V20.385C394.866,16.212,392.719,12.333,389.183,10.118z" fill='red'/>
</svg>
</div>
    `;
  }

  createCarItem(color: string): HTMLElement {
    const carItem = document.createElement('div');
    carItem.className = 'car-img';
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

  createCar({ name, color, id }: Car): HTMLElement {
    const carItem = document.createElement('div');
    const btnContainer = document.createElement('div');
    carItem.innerHTML += `<p class='car-name'>${name}</p>`;
    btnContainer.append(
      this.button.createButton('A', 'btn-small', 'start-car-btn'),
      this.button.createButton('B', 'btn-small', 'stop-car-btn'),
      this.button.createButton('S', 'btn-small', 'select-car-btn'),
      this.button.createButton('D', 'btn-small', 'delete-car-btn')
    );
    btnContainer.className = 'btn-container';
    carItem.append(btnContainer);
    carItem.append(this.createCarItem(color));
    carItem.id = `${id}`;
    carItem.innerHTML += '<div class="empty"></div>';
    carItem.innerHTML += this.flag;
    carItem.className = 'car-item';
    carItem.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.className !== 'btn-small') return;
      switch (target.id) {
        case 'select-car-btn':
          this.button.selectBtnHandler(target);
          break;
        case 'delete-car-btn':
          this.button.deleteCarBtn(target);
      }
    });

    // carItem.addEventListener('click', this.qwer);
    // document.body.addEventListener('click', () => );

    // carItem.addEventListener('click', (e) => {

    //   let target = e.target as HTMLElement;
    //   console.log(target);
    //   if (target.id === 'select-car-btn') {
    //     while (target.className !== 'car-item') {
    //       target = target.parentNode as HTMLElement;
    //     }
    //     this.button.selectBtnHandler(target);
    //   }
    // });
    return carItem;
  }
}
