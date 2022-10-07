// export interface Website {
//     name: string,
//     url: string,
//     enabled: boolean,
// };

import axios from "axios";
import { MorrisonsClient } from "../clients/morrisonsClient";

// export const Websites: Website[] = [
//     {
//         name: 'Morrisons',
//         url: 'https://groceries.morrisons.com/webshop/startWebshop.do',
//         enabled: false,
//     },
//     {
//         name: 'Tesco',
//         url: 'https://www.tesco.com/groceries/en-GB/shop/fresh-food/fresh-fruit/bananas',
//         enabled: false,
//     },
// ];

enum Stores {
    Morrisons,
    Tesco,
}

interface Store {
    store: Stores,
    url: string,
    enabled: boolean,
}

class Config {
    public static morrisonsEnabled = false;
    public static tescoEnabled = false;
}

export class Websites {
    private static readonly stores: Store[] = [
        {
            store: Stores.Morrisons,
            url: 'https://groceries.morrisons.com/webshop/startWebshop.do',
            enabled: false,
        },
        {
            store: Stores.Tesco,
            url: 'https://www.tesco.com/groceries/en-GB/shop/fresh-food/fresh-fruit/bananas',
            enabled: false,
        },
    ]

    static url(queryStore: Stores): string {
        // Lazy - fix
        var url: string;
        this.stores.forEach(store => {
            if (store.store == queryStore) {
                if (!store.enabled) {
                    console.error(`Store '${store.store}' is not enabled`);
                }
                url = store.url;
            }
        })
        return url;
    }
}

export class Contants {
    public static readonly axiosInstance = axios.create();
}