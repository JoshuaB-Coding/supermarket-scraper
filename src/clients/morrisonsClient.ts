import axios, { AxiosInstance } from "axios";
import cheerio from 'cheerio';
import { Websites } from "../config/constants";

export class MorrisonsClient {
    private static readonly baseURL = 'https://groceries.morrisons.com/';
    private static lastUpdated: number;
    private static update = 60 * 60 * 24;
    private static readonly axiosInstance = axios.create();

    constructor() {
        
    }

    static items() {
        const currentDate = Date.now();
        // if (currentDate - this.lastUpdated < this.update) {
        //     return;
        // }
        this.lastUpdated = currentDate;

        this.axiosInstance.get(this.baseURL)
        .then(response => {
            const html = response.data;
            console.log(html);
            // const $ = cheerio.load(html);
        })
        .catch(console.error);
    }
};