import { StoreItem } from './types';

export class Card {
    createCard(item: StoreItem): HTMLElement {
        const template: HTMLTemplateElement = document.querySelector('#prod-item-instance') as HTMLTemplateElement;

        const { name, producer, releaseYear, memory, img, amount, color, popularity, price } = item;

        const cloneProdItem: HTMLElement = template.content.cloneNode(true) as HTMLElement;
        const prodItem: HTMLElement = cloneProdItem.querySelector('.prod-item') as HTMLElement;
        const prodImg: HTMLImageElement = cloneProdItem.querySelector('.prod-item__img') as HTMLImageElement;
        const prodDescription: HTMLElement = cloneProdItem.querySelector('.prod-item__description') as HTMLElement;
        const prodPrice: HTMLElement = cloneProdItem.querySelector('.prod-item__price') as HTMLElement;
        const prodAmount: HTMLElement = cloneProdItem.querySelector('.prod-item__amount') as HTMLElement;

        prodImg.src = img;
        prodImg.alt = name;
        prodDescription.textContent = `${name}, ${memory}GB, ${color}, ${releaseYear}`;
        prodPrice.textContent = `Цена: ${price} ₽`;
        prodAmount.textContent = `Остаток на складе: ${amount}`;
        prodItem.dataset.name = name;
        prodItem.dataset.producer = producer;
        prodItem.dataset.releaseYear = `${releaseYear}`;
        prodItem.dataset.memory = `${memory}`;
        prodItem.dataset.amount = `${amount}`;
        prodItem.dataset.color = color;
        prodItem.dataset.popularity = `${popularity}`;

        if (popularity) {
            const imgHit: HTMLImageElement = document.createElement('img');
            imgHit.className = 'prod-item__hit-img';
            imgHit.src = require('../assets/images/hit.png');
            imgHit.alt = 'HIT';
            prodItem.append(imgHit);
        }

        return cloneProdItem;
    }
}
