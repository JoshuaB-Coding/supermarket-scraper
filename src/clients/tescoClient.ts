import axios, { AxiosInstance } from "axios";
import cheerio from 'cheerio';
import { Constants } from "../config/constants";
import { Items } from "../models/Items";

export class TescoClient {
    private static readonly baseURL = 'https://www.tesco.com/groceries/en-GB/shop/';
    private static lastUpdated: number;
    private static update = 60 * 60 * 24; // 1 day timer
    private static readonly axiosInstance = Constants.axiosInstance;

    static items(): Promise<Items | undefined> {
        const currentDate = Date.now();
        // if (currentDate - this.lastUpdated < this.update) {
        //     return;
        // }
        this.lastUpdated = currentDate;

        this.axiosInstance.get(this.baseURL)
        .then(response => {
            const html = response.data;
            console.log(html);
            // this.htm
            const { items } = this.htmlParser(html);
            console.log(items);
            return items;
        })
        .catch(console.error);
        return;
    }

    static htmlParser(html: any): Items {
        const $ = cheerio.load(html);

        return {
            items: [
                {
                    id: '01',
                    name: 'item01',
                    priceInPennies: 100,
                    description: '',
                    offers: '',
                },
            ],
        };
    }
};
