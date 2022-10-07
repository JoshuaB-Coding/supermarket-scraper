import axios, { AxiosInstance } from "axios";
import cheerio from 'cheerio';
import { Contants } from "../config/constants";

export class TescoClient {
    private static readonly baseURL = 'https://www.tesco.com/groceries/en-GB/shop/';
    private static lastUpdated: number;
    private static update = 60 * 60 * 24;
    private static readonly axiosInstance = Contants.axiosInstance;

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