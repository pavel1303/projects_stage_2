export interface StoreItem {
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
