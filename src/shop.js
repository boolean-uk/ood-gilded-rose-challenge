const Item = require('./item.js')

class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      if (item.name === 'Aged Brie') {
        item.updateQuality()
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        item.updateQuality()
      } else if (item.name === 'Sulfuras, Hand of Ragnaros') {
        item.updateQuality()
      } else {
        if (item.quality > 0) {
          item.quality = item.quality - 1
        }

        item.sellIn = item.sellIn - 1

        if (item.sellIn < 0) {
          if (item.quality > 0) {
            item.quality = item.quality - 1
          }
        }
      }
    }

    return this.items
  }
}
module.exports = Shop
