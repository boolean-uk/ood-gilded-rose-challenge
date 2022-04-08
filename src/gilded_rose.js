class Item {
    constructor(name, sellIn, quality) {
        this.name = name
        this.sellIn = sellIn
        this.quality = quality
    }
}

class Shop {
    constructor(items = []) {
        this.items = items
    }
    updateQuality() {
        this.items.forEach((item) => {
            const agedBrie = item.name == 'Aged Brie'
            const backStagePasses =
                item.name == 'Backstage passes to a TAFKAL80ETC concert'
            const sulfurus = item.name == 'Sulfuras, Hand of Ragnaros'

            if (!agedBrie && !backStagePasses) {
                if (item.quality > 0) {
                    if (!sulfurus) {
                        item.quality = item.quality - 1
                    }
                }
            } else {
                if (item.quality < 50) {
                    item.quality = item.quality + 1
                    if (backStagePasses) {
                        if (item.sellIn < 11) {
                            if (item.quality < 50) {
                                item.quality = item.quality + 1
                            }
                        }
                        if (item.sellIn < 6) {
                            if (item.quality < 50) {
                                item.quality = item.quality + 1
                            }
                        }
                    }
                }
            }
            if (!sulfurus) {
                item.sellIn = item.sellIn - 1
            }
            if (item.sellIn < 0) {
                if (!agedBrie) {
                    if (!backStagePasses) {
                        if (item.quality > 0) {
                            if (!sulfurus) {
                                item.quality = item.quality - 1
                            }
                        }
                    } else {
                        item.quality = item.quality - item.quality
                    }
                } else {
                    if (item.quality < 50) {
                        item.quality = item.quality + 1
                    }
                }
            }
        })
        return this.items
    }
}
module.exports = {
    Item,
    Shop
}