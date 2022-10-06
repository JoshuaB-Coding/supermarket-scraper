export interface Website {
    name: string,
    url: string,
    enabled: boolean,
};

export const Websites: Website[] = [
    {
        name: 'Morrisons',
        url: 'https://groceries.morrisons.com/webshop/startWebshop.do',
        enabled: false,
    },
    {
        name: 'Tesco',
        url: 'https://www.tesco.com/groceries/en-GB/shop/fresh-food/fresh-fruit/bananas',
        enabled: false,
    },
];