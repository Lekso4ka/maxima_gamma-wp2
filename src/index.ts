import "./style.scss";
import { names } from "./constants";
import {createTable} from "./functions";
import { 
    Product, 
    basketValues 
} from "./types";


// const products: Product<number>[] = []; 

// for (let i: number = 0; i < names.length; i++) {
//     const price: number = 100 + i * 1.5**i;
//     products.push(new Product<number>(i+1, price, names[i]))
// }

// console.log(products)


const products: Product<string>[] = []; 



for (let i: number = 0; i < names.length; i++) {
    const price: number = 100 + i * 1.5**i;
    products.push(new Product<string>(names[i], price))
}







createTable(products);
