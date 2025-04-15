export class Product<T> {
    id: T;
    name: string;
    price: number;
    quantity: number;
    constructor(id: T, price: number, name: string = "") {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = 100;
    }
    setPrice(n: number) {
        this.price = n;
    }
    setQuantity(n: number) {
        this.quantity = n;
    }
}


export type basketValues = {
    cnt: number,
    price: number
}