import { storeData } from './data';
import { StoreData, StoreItem } from './types';
import * as noUiSlider from 'nouislider';
import { App } from './App';

export class Filters {
    app = new App();
    public data: StoreData;
    constructor() {
        this.data = storeData;
    }
    public parseData(): Array<number[] | string[]> {
        const producers: string[] = [];
        const releaseYears: number[] = [];
        const memory: number[] = [];
        const amounts: number[] = [];
        const colors: string[] = [];
        this.data.items.forEach((item: StoreItem) => {
            for (const prop in item) {
                switch (prop) {
                    case 'producer':
                        if (!producers.includes(item.producer)) {
                            producers.push(item.producer);
                        }
                        break;
                    case 'releaseYear':
                        if (!releaseYears.includes(item.releaseYear)) {
                            releaseYears.push(item.releaseYear);
                        }
                        break;
                    case 'memory':
                        if (!memory.includes(item.memory)) {
                            memory.push(item.memory);
                        }
                        break;
                    case 'amount':
                        if (!amounts.includes(item.amount)) {
                            amounts.push(item.amount);
                        }
                        break;
                    case 'color':
                        if (!colors.includes(item.color.toUpperCase())) {
                            colors.push(item.color.toUpperCase());
                        }
                }
            }
        });
        memory.sort((a, b) => {
            return a - b;
        });
        releaseYears.sort((a, b) => {
            return a - b;
        });
        amounts.sort((a, b) => {
            return a - b;
        });
        const filters: Array<number[] | string[]> = [producers, releaseYears, memory, amounts, colors];
        return filters;
    }

    public async drawFilters(): Promise<void> {
        const [producers, releaseYears, memory, amounts, colors] = await this.parseData();
        const producerContainer: HTMLElement = document.querySelector('#company-filter') as HTMLElement;
        const colorsContainer: HTMLElement = document.querySelector('#color-filter') as HTMLElement;
        const memoryContainer: HTMLElement = document.querySelector('#size-filter') as HTMLElement;

        producers.forEach((item) => {
            const filterItem: HTMLDivElement = document.createElement('div') as HTMLDivElement;
            const label: HTMLLabelElement = document.createElement('label') as HTMLLabelElement;
            const input: HTMLInputElement = document.createElement('input') as HTMLInputElement;

            label.htmlFor = `${item}`.toLowerCase();
            label.textContent = `${item}`;
            input.id = `${item}`.toLowerCase();
            input.value = `${item}`;
            input.type = 'checkbox';

            filterItem.append(label, input);
            producerContainer.append(filterItem);
        });

        colors.forEach((item) => {
            const filterItem: HTMLDivElement = document.createElement('div') as HTMLDivElement;
            const label: HTMLLabelElement = document.createElement('label') as HTMLLabelElement;
            const input: HTMLInputElement = document.createElement('input') as HTMLInputElement;

            label.htmlFor = `${item}`.toLowerCase();
            label.textContent = `${item}`;
            input.id = `${item}`.toLowerCase();
            input.value = `${item}`;
            input.type = 'checkbox';

            filterItem.append(label, input);
            colorsContainer.append(filterItem);
        });

        memory.forEach((item) => {
            const filterItem: HTMLDivElement = document.createElement('div') as HTMLDivElement;
            const label: HTMLLabelElement = document.createElement('label') as HTMLLabelElement;
            const input: HTMLInputElement = document.createElement('input') as HTMLInputElement;

            label.htmlFor = `gb${item}`.toLowerCase();
            label.textContent = `${item}`;
            input.id = `gb${item}`.toLowerCase();
            input.value = `${item}`;
            input.type = 'checkbox';

            filterItem.append(label, input);
            memoryContainer.append(filterItem);
        });

        const rangeSliderYear: noUiSlider.target = document.querySelector('#year-filter-slider') as noUiSlider.target;
        if (rangeSliderYear) {
            noUiSlider.create(rangeSliderYear, {
                start: [releaseYears[0], releaseYears[releaseYears.length - 1]],
                connect: true,
                step: 1,
                range: {
                    min: [+releaseYears[0]],
                    max: [+releaseYears[releaseYears.length - 1]],
                },
            });
            const input1: HTMLInputElement = document.querySelector('#year-input-1') as HTMLInputElement;
            const input2: HTMLInputElement = document.querySelector('#year-input-2') as HTMLInputElement;
            const inputs: HTMLInputElement[] = [input1, input2] as HTMLInputElement[];
            rangeSliderYear.noUiSlider?.on('update', (values) => {
                input1.value = `${Number(values[0]).toFixed(0)}`;
                input2.value = `${Number(values[1]).toFixed(0)}`;
            });
            const setRangeSliderYear = (i: number, value: string): void => {
                const arr: string[] = [input1.value, input2.value];
                arr[i] = value;

                rangeSliderYear.noUiSlider?.set(arr);
            };
            inputs.forEach((el, idx) => {
                el.addEventListener('change', (e) => {
                    const target: HTMLInputElement = e.currentTarget as HTMLInputElement;
                    setRangeSliderYear(idx, target.value);
                });
            });
        }

        const rangeSliderAmounts: noUiSlider.target = document.querySelector(
            '#amount-filter-slider'
        ) as noUiSlider.target;
        if (rangeSliderAmounts) {
            noUiSlider.create(rangeSliderAmounts, {
                start: [amounts[0], amounts[amounts.length - 1]],
                connect: true,
                step: 1,
                range: {
                    min: [+amounts[0]],
                    max: [+amounts[amounts.length - 1]],
                },
            });
            const input1: HTMLInputElement = document.querySelector('#amount-input-1') as HTMLInputElement;
            const input2: HTMLInputElement = document.querySelector('#amounts-input-2') as HTMLInputElement;
            const inputs: HTMLInputElement[] = [input1, input2] as HTMLInputElement[];
            rangeSliderAmounts.noUiSlider?.on('update', (values) => {
                input1.value = `${Number(values[0]).toFixed(0)}`;
                input2.value = `${Number(values[1]).toFixed(0)}`;
            });
            const setRangeSliderAmount = (i: number, value: string): void => {
                const arr: string[] = [input1.value, input2.value];
                arr[i] = value;

                rangeSliderAmounts.noUiSlider?.set(arr);
            };
            inputs.forEach((el, idx) => {
                el.addEventListener('change', (e) => {
                    const target: HTMLInputElement = e.currentTarget as HTMLInputElement;
                    setRangeSliderAmount(idx, target.value);
                });
            });
        }
        this.app.drawCheckedFilters();
    }
}
