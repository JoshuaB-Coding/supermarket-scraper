import axios from 'axios';
import cheerio from 'cheerio';
import { MorrisonsClient } from './clients/morrisonsClient';
import { TescoClient } from './clients/tescoClient';
import { Websites, Website } from './websites';
import { Constants } from './config/constants';

console.log('Project setup correctly!');

// TescoClient.items();

const tesco: Website = Websites.filter(x => x.name === 'Tesco')[0]; // messy but should work
console.log(tesco.url);

Constants.axiosInstance.get(tesco.url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        
        // const price: cheerio.Cheerio = $('.beans-price__text');
        const productDetails: cheerio.Cheerio = $('.product-details--wrapper');
        const productName: cheerio.Cheerio = $('.product-details--wrapper > .beans-link__text');
        const productPrice: cheerio.Cheerio = $('.product-details--wrapper > .bean-price__text');

        productDetails.each((i, elem) => {
            console.log(i);
            console.log($(elem).find('.beans-link__text').first().text());
            console.log($(elem).find('.beans-price__text').text());
            console.log($(elem).find('.beans-price__subtext').first().text());
        });

        // productName.each((i, elem) => {
        //     console.log(i);
        //     console.log($(elem).text());
        // });

        // productPrice.each((i, elem) => {
        //     console.log(i);
        //     console.log($(elem).text());
        // });

        // console.log(html);
    })
    .catch(console.error);