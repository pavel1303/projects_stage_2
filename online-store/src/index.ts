import './scss/style.scss';
import { App } from './ts/App';
import { storeData } from './ts/data';
import { Filters } from './ts/Filters';

const app = new App();
app.start(storeData);

const filters = new Filters();
filters.drawFilters();
const filtersContainer: HTMLElement = document.querySelector('.showcase__filters') as HTMLElement;
filtersContainer.addEventListener('change', (e: Event) => {
    const targetNode: Node = e.target as Node;
    const parentContainerDataSet = targetNode.parentElement?.parentElement?.dataset.filtername;
    const targetElement: HTMLInputElement = e.target as HTMLInputElement;

    const inputYear1: HTMLInputElement = document.querySelector('#year-input-1') as HTMLInputElement;
    const inputYear2: HTMLInputElement = document.querySelector('#year-input-2') as HTMLInputElement;
    const okArrYear: string[] = [];

    const inputAmount1: HTMLInputElement = document.querySelector('#amount-input-1') as HTMLInputElement;
    const inputAmount2: HTMLInputElement = document.querySelector('#amounts-input-2') as HTMLInputElement;
    const okArrAmount: string[] = [];
    switch (parentContainerDataSet) {
        case 'memory':
            if (targetElement.checked) {
                (app.chosenFilters[parentContainerDataSet as string] as string[]).push(targetElement.id.slice(2));
            } else if (!targetElement.checked) {
                (app.chosenFilters[parentContainerDataSet as string] as string[]) = (
                    app.chosenFilters[parentContainerDataSet as string] as string[]
                ).filter((el) => el !== targetElement.id.slice(2));
            }
            break;

        case 'popularity':
            if (targetElement.checked) {
                (app.chosenFilters[parentContainerDataSet as string] as string[]).push('true');
            } else if (!targetElement.checked) {
                (app.chosenFilters[parentContainerDataSet as string] as string[]) = (
                    app.chosenFilters[parentContainerDataSet as string] as string[]
                ).filter((el) => el !== 'true');
            }
            break;

        case 'releaseYear':
            for (let i = +inputYear1.value; i <= +inputYear2.value; i++) {
                okArrYear.push(i.toString());
            }
            (app.chosenFilters[parentContainerDataSet as string] as string[]) = okArrYear;
            break;

        case 'amount':
            for (let i = +inputAmount1.value; i <= +inputAmount2.value; i++) {
                okArrAmount.push(i.toString());
            }
            (app.chosenFilters[parentContainerDataSet as string] as string[]) = okArrAmount;
            break;

        default:
            if (targetElement.checked && parentContainerDataSet !== 'popularity') {
                (app.chosenFilters[parentContainerDataSet as string] as string[]).push(targetElement.id);
            } else if (!targetElement.checked && parentContainerDataSet !== 'popularity') {
                (app.chosenFilters[parentContainerDataSet as string] as string[]) = (
                    app.chosenFilters[parentContainerDataSet as string] as string[]
                ).filter((el) => el.toLowerCase() !== targetElement.id.toLowerCase());
            }
    }

    const prodContainer: HTMLDivElement = document.querySelector('.showcase__products-container') as HTMLDivElement;
    prodContainer.innerHTML = '';
    localStorage.setItem('chosenFilters', JSON.stringify(app.chosenFilters));
    app.start(storeData);
});
