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
                if (item.quality > 0 && !sulfurus) {
                    {
                        item.quality--
                    }
                }
            } else {
                if (item.quality < 50) {
                    item.quality++
                        if (backStagePasses) {
                            if (item.sellIn < 11 && item.quality < 50) {
                                item.quality++
                            }
                            if (item.sellIn < 6 && item.quality < 50) {
                                item.quality++
                            }
                        }
                }
            }
            if (!sulfurus) {
                item.sellIn--
            }
            if (item.sellIn < 0) {
                if (!agedBrie) {
                    if (!backStagePasses) {
                        if (item.quality > 0 && !sulfurus) {
                            item.quality--
                        }
                    } else {
                        item.quality = 0
                    }
                } else {
                    if (item.quality < 50) {
                        item.quality++
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