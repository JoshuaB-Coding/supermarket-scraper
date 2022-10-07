import axios from 'axios';
import cheerio from 'cheerio';
import { MorrisonsClient } from './clients/morrisonsClient';
import { TescoClient } from './clients/tescoClient';
import { Websites, Website } from './websites';

console.log('Project setup correctly!');

const AxiosInstance = axios.create();

TescoClient.items();

// const tesco: Website = Websites.filter(x => x.name === 'Tesco')[0]; // messy but should work
// console.log(tesco.url);

// AxiosInstance.get(tesco.url)
//     .then(response => {
//         const html = response.data;
//         // const $ = cheerio.load(html);
//         console.log(html);
//     })
//     .catch(console.error);