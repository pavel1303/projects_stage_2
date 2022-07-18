export interface StoreItem {
    [key: string]: string | number | boolean;
    id: number;
    name: string;
    producer: string;
    releaseYear: number;
    memory: number;
    img: string;
    amount: number;
    color: string;
    popularity: boolean;
    price: number;
}

export interface StoreData {
    items: StoreItem[];
}

// export type Properties =
//     | 'color'
//     | 'producer'
//     | 'memory'
//     | 'releaseYear'
//     | 'popularity'
//     | 'name'
//     | 'amount'
//     | 'img'
//     | 'price';
// export type StateItem = { [key: string]: boolean };

export type ChosenFilters = {
    [key: string]: string[];
    producer: string[];
    color: string[];
    memory: string[];
    releaseYear: string[];
    amount: string[];
    popularity: string[];
};
