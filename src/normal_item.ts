import { item } from "./item";

export class Normal_item implements item {
    name : string;
    sellIn : number;
    quality : number;

    constructor(name : string, sellIn : number, quality : number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    update() : void {
        this.sellIn = this.sellIn - 1;

        if(this.quality < 50){
            if (this.sellIn < 0){
                this.quality = this.quality + 2;
            } else {
                this.quality = this.quality + 1;
            }
        }

        this.checkIfQualityAbove50()
    }

    checkIfQualityAbove50() : void {
        if(this.quality > 50){
            this.quality = 50;
        }
    }
}