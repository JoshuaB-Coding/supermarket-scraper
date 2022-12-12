import cheerio from 'cheerio';
import { Constants } from "../config/constants";
import { Items } from "../models/Items";
import { Food } from "../models/Food";

export class TescoClient {
    private static readonly baseURL = 'https://www.tesco.com/groceries/en-GB/shop/fresh-food/all';
    private static lastUpdated: number;
    private static update = 60 * 60 * 24; // 1 day timer
    private static readonly axiosInstance = Constants.axiosInstance;

    public static itemList: Food[] = []; // needs to be its own data.json file at some point

    static async items(): Promise<Food[]> {
        const currentDate = Date.now();
        // if (currentDate - this.lastUpdated < this.update) {
        //     return;
        // }
        this.lastUpdated = currentDate;

        var isSearching = true;
        var page = 0;
        while (isSearching) {
            page++;
            await this.axiosInstance.get(this.baseURL + `?page=${page}`)
                .then(response => {
                    const html = response.data;
                    const foodItems = this.htmlParser(html);
                    // console.log(foodItems); // DEBUG
                    return foodItems;
                })
                .then(foodItems => {
                    foodItems.forEach(food => this.itemList.push(food));
                })
                .catch(error => {
                    console.log(`ERROR\n${error}`);
                    isSearching = false;
                });
        }
        return this.itemList;
    }

    static htmlParser(html: any): Food[] {
        const $ = cheerio.load(html);

        const productDetails: cheerio.Cheerio = $('.product-details--wrapper');
        
        productDetails.each((index, item) => {
            const productName = $(item).find('.beans-link__text');
            const productPrice = $(item).find('.beans-price__text');
            const productSubtext = $(item).find('.beans-price__subtext');
            
            // TODO: Some items have no price which isn't the expected behaviour
            this.itemList.push({
                longName: productName.first().text(),
                price: this.parsePrice(productPrice.text()),
                currency: '£',
            });
        });

        return this.itemList;
    }

    static parsePrice(price: string): number {
        const regex = /\d+\.\d{2}/g;
        const matches = price.match(regex);
        if (matches) {
            return parseFloat(matches[0]);
        }
    }
};
