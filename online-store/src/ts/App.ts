import { ChosenFilters, StoreData, StoreItem } from './types';
import { Card } from './Card';
import * as noUiSlider from 'nouislider';
export class App {
    public card: Card;
    public chosenFilters: ChosenFilters;
    constructor() {
        this.card = new Card();
        this.chosenFilters = localStorage.getItem('chosenFilters')
            ? JSON.parse(localStorage.getItem('chosenFilters') as string)
            : {
                  producer: [],
                  color: [],
                  memory: [],
                  releaseYear: [],
                  amount: [],
                  popularity: [],
              };
    }
    start(data: StoreData): void {
        const fragment: DocumentFragment = document.createDocumentFragment() as DocumentFragment;
        const prodContainer: HTMLElement = document.querySelector('.showcase__products-container') as HTMLElement;
        data.items.forEach((el: StoreItem) => {
            if (this.filterСompliance(el)) {
                const newProd: HTMLElement = this.card.createCard(el) as HTMLElement;
                fragment.append(newProd);
            }
        });
        prodContainer.append(fragment);
    }
    filterСompliance(el: StoreItem): boolean {
        let result = true;
        for (const prop in this.chosenFilters) {
            if (this.chosenFilters[prop].length !== 0) {
                let count: number = this.chosenFilters[prop].length;
                for (let i = 0; i < this.chosenFilters[prop].length; i++) {
                    if (this.chosenFilters[prop][i] !== el[prop].toString().toLowerCase()) {
                        count--;
                    }
                }
                if (count === 0 && this.chosenFilters[prop].length !== 0) {
                    result = false;
                }
            }
        }
        return result;
    }
    drawCheckedFilters() {
        const rangeSliderYear: noUiSlider.target = document.querySelector('#year-filter-slider') as noUiSlider.target;
        const rangeSliderAmounts: noUiSlider.target = document.querySelector(
            '#amount-filter-slider'
        ) as noUiSlider.target;
        for (const prop in this.chosenFilters) {
            console.log(this.chosenFilters);
            (this.chosenFilters[prop] as string[]).forEach((el) => {
                if (prop === 'memory') {
                    (document.querySelector(`#gb${el}`) as HTMLInputElement).checked = true;
                } else if (prop === 'popularity') {
                    (document.querySelector(`#best-seles`) as HTMLInputElement).checked = true;
                } else if (prop === 'releaseYear') {
                    rangeSliderYear.noUiSlider?.set([
                        this.chosenFilters[prop][0],
                        this.chosenFilters[prop][this.chosenFilters[prop].length - 1],
                    ]);
                } else if (prop === 'amount') {
                    rangeSliderAmounts.noUiSlider?.set([
                        this.chosenFilters[prop][0],
                        this.chosenFilters[prop][this.chosenFilters[prop].length - 1],
                    ]);
                } else {
                    (document.querySelector(`#${el}`) as HTMLInputElement).checked = true;
                }
            });
        }
    }
}
