"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = exports.ConjuredItem = exports.BackstagePassesItem = exports.SulfurasItem = exports.AgedBrieItem = exports.StandardItem = exports.Item = void 0;
class Item {
    constructor(_name, _sellIn, _quality) {
        this._name = _name;
        this._sellIn = _sellIn;
        this._quality = _quality;
    }
    get quality() {
        return this._quality;
    }
    set quality(value) {
        this._quality = value;
    }
    get sellIn() {
        return this._sellIn;
    }
    set sellIn(value) {
        this._sellIn = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
exports.Item = Item;
class StandardItem extends Item {
    updateQuality() {
        this.sellIn <= 0 ? (this.quality -= 2) : this.quality--;
        this.sellIn--;
        if (this.quality < 0) {
            this.quality = 0;
        }
    }
}
exports.StandardItem = StandardItem;
class AgedBrieItem extends Item {
    updateQuality() {
        this.quality++;
        this.sellIn--;
        if (this.quality > 50) {
            this.quality = 50;
        }
    }
}
exports.AgedBrieItem = AgedBrieItem;
class SulfurasItem extends Item {
    constructor(sellIn) {
        super('Sulfuras, Hand of Ragnaros', sellIn, 80);
    }
    updateQuality() { }
}
exports.SulfurasItem = SulfurasItem;
class BackstagePassesItem extends Item {
    constructor(sellIn, quality) {
        super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality);
    }
    updateQuality() {
        if (this.sellIn > 10) {
            this.quality++;
        }
        else if (this.sellIn > 5) {
            this.quality += 2;
        }
        else if (this.sellIn > 0) {
            this.quality += 3;
        }
        else {
            this.quality = 0;
        }
        this.sellIn--;
        if (this.quality > 50) {
            this.quality = 50;
        }
    }
}
exports.BackstagePassesItem = BackstagePassesItem;
class ConjuredItem extends Item {
    constructor(sellIn, quality) {
        super('Conjured Mana Cake', sellIn, quality);
    }
    updateQuality() {
        this.sellIn <= 0 ? (this.quality -= 4) : (this.quality -= 2);
        this.sellIn--;
        if (this.quality < 0) {
            this.quality = 0;
        }
    }
}
exports.ConjuredItem = ConjuredItem;
class Shop {
    constructor(items = []) {
        this.items = items;
    }
    updateQualityOfItems() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].updateQuality();
        }
        return this.items;
    }
}
exports.Shop = Shop;
