"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = exports.ConjuredItem = exports.BackstagePassesItem = exports.SulfurasItem = exports.AgedBrieItem = exports.StandardItem = exports.Item = void 0;
const MAX_QUALITY = 50;
const MIN_QUALITY = 0;
const BACKSTAGE_PASS_QUALITY_STEP_1 = 3;
const BACKSTAGE_PASS_QUALITY_STEP_2 = 2;
const BACKSTAGE_PASS_SELLIN_THRESHOLD_1 = 10;
const BACKSTAGE_PASS_SELLIN_THRESHOLD_2 = 5;
// Utility function to handle quality boundary conditions
function clampQuality(quality) {
    return Math.min(MAX_QUALITY, Math.max(MIN_QUALITY, quality));
}
class Item {
    constructor(_name, _sellIn, _quality) {
        this._name = _name;
        this._sellIn = _sellIn;
        this._quality = _quality;
    }
    get quality() {
        return this._quality;
    }
    get sellIn() {
        return this._sellIn;
    }
    get name() {
        return this._name;
    }
}
exports.Item = Item;
class StandardItem extends Item {
    updateQuality() {
        this._sellIn <= 0 ? (this._quality -= 2) : this._quality--;
        this._sellIn--;
        this._quality = clampQuality(this._quality);
    }
}
exports.StandardItem = StandardItem;
class AgedBrieItem extends Item {
    updateQuality() {
        this._quality++;
        this._sellIn--;
        this._quality = clampQuality(this._quality);
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
        if (this._sellIn > BACKSTAGE_PASS_SELLIN_THRESHOLD_1) {
            this._quality += BACKSTAGE_PASS_QUALITY_STEP_1;
        }
        else if (this._sellIn > BACKSTAGE_PASS_SELLIN_THRESHOLD_2) {
            this._quality += BACKSTAGE_PASS_QUALITY_STEP_2;
        }
        else if (this._sellIn > 0) {
            this._quality += 1;
        }
        else {
            this._quality = 0;
        }
        this._sellIn--;
        this._quality = clampQuality(this._quality);
    }
}
exports.BackstagePassesItem = BackstagePassesItem;
class ConjuredItem extends Item {
    constructor(sellIn, quality) {
        super('Conjured Mana Cake', sellIn, quality);
    }
    updateQuality() {
        this._sellIn <= 0 ? (this._quality -= 4) : (this._quality -= 2);
        this._sellIn--;
        this._quality = clampQuality(this._quality);
    }
}
exports.ConjuredItem = ConjuredItem;
class Shop {
    constructor(items = []) {
        this.items = items;
    }
    updateQualityOfItems() {
        for (const item of this.items) {
            item.updateQuality();
        }
        return this.items;
    }
}
exports.Shop = Shop;
