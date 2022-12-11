export interface Items {
    items: Item[],
};

interface Item {
    id: string,
    name: string,
    priceInPennies: number,
    description: string,
    offers: string,
};
