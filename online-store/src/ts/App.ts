import { StoreData, StoreItem } from './types';
import { Card } from './Card';
export class App {
    public card: Card;
    constructor() {
        this.card = new Card();
    }
    start(data: StoreData): void {
        const fragment: DocumentFragment = document.createDocumentFragment() as DocumentFragment;
        const prodContainer: HTMLElement = document.querySelector('.showcase__products-container') as HTMLElement;
        data.items.forEach((el: StoreItem) => {
            const newProd: HTMLElement = this.card.createCard(el) as HTMLElement;
            fragment.append(newProd);
        });
        prodContainer.append(fragment);
    }
}
