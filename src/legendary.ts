import { item } from "./item";

export class Legendary implements item {
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