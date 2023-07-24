import { item } from "./item";

export class Backstage_pass implements item {
    name : string;
    sellIn : number;
    quality : number;

    constructor(name : string, sellIn : number, quality : number) {
        this.name = "Backstage passes to " + name
        this.sellIn = sellIn;
        this.quality = quality;
    }

    update() : void {
        this.sellIn = this.sellIn -1;
        
        if(this.sellIn < 0){
            this.quality = 0;
        }
        else if(this.sellIn < 5){
            this.quality = this.quality + 3;
        }
        else if(this.sellIn < 10){
            this.quality = this.quality + 2
        }
        else{
            this.quality = this.quality + 1;
        }

        this.checkIfQualityAbove50()
    }

    checkIfQualityAbove50() : void {
        if(this.quality > 50){
            this.quality = 50;
        }
    }
}