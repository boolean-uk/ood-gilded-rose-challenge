class Item {
    constructor (name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class NormalItem extends Item {
    constructor (name, sellIn, quality) {
        super(name, sellIn, quality);
    }
    update () {
        if (this.quality > 0) this.quality--;
        this.sellIn--;
        if (this.quality > 0 && this.sellIn < 0) this.quality--;
    }
}

class AgedBrie extends Item {
    constructor (name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    update () {
        this.sellIn--;
        if (this.quality < 50) this.quality++;
        if (this.quality < 50 && this.sellIn < 0) this.quality++;
    }
}

class Backstage extends Item {
    constructor (name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    update () {
        if (this.quality < 50) this.quality++;
        if (this.sellIn < 11 && this.quality < 50) this.quality++;
        if (this.sellIn < 6 && this.quality < 50) this.quality++;
        this.sellIn--;
        if (this.sellIn < 0) this.quality = 0
    }
}

class Sulfuras extends Item {
    constructor (name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    update () { }
}

module.exports = {
    Item,
    AgedBrie,
    NormalItem,
    Backstage,
    Sulfuras
}