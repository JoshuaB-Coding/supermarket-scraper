import axios from 'axios';
import cheerio from 'cheerio';
import { MorrisonsClient } from './clients/morrisonsClient';
import { TescoClient } from './clients/tescoClient';
import { Websites, Website } from './models/websites';
import { Constants } from './config/constants';

console.log('Project setup correctly!');

TescoClient.items()
.then(items => {
    console.log(items.filter(item => item.price === 0.5));
});
console.log('Here');