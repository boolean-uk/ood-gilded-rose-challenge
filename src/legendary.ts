import { Item } from "./item";

export class Legendary implements Item {
    name : string;
    sellIn : number;
    quality : number;

    constructor(name : string, sellIn : number, quality : number) {
        this.name = name
        this.sellIn = sellIn;
        this.quality = quality;
    }

    update(): void {
        // do nothing
    }
}