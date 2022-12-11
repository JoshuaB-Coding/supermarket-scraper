import axios from "axios";

// each website url may not be needed anymore 

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
            url: 'https://www.tesco.com/groceries/en-GB/shop/fresh-food/all',
            enabled: false,
        },
    ]

    static url(queryStore: Stores): string | undefined {
        const store = this.stores.find(store => store.store = queryStore);
        if (!store.enabled) {
            return;
        }
        return store.url;
    }
}

export class Constants {
    public static readonly axiosInstance = axios.create();
}