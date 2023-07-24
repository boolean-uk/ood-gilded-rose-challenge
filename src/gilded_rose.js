const MIN_QUALITY = 0
const MAX_QUALITY = 50

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
    for (const item of this.items) {
      item.sellIn--
      switch (item.name) {
        case 'Aged Brie':
          this.agedBrieUpdate(item)
          break
        case 'Sulfuras, Hand of Ragnaros':
          item.sellIn++
          break
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.backstagePassesUpdate(item)
          break
        default: {
          this.standardUpdate(item)
        }
      }
      this.validateQuality(item)
    }
    return this.items
  }

  validateQuality(item) {
    if (
      item.quality > MAX_QUALITY &&
      item.name !== 'Sulfuras, Hand of Ragnaros'
    ) {
      item.quality = MAX_QUALITY
    }
    if (item.quality < MIN_QUALITY) {
      item.quality = MIN_QUALITY
    }
  }

  standardUpdate(item) {
    item.quality -= item.sellIn >= 0 ? 1 : 2
  }

  agedBrieUpdate(item) {
    item.quality += item.sellIn >= 0 ? 1 : 2
  }

  backstagePassesUpdate(item) {
    if (item.sellIn >= 10) {
      item.quality++
    } else if (item.sellIn >= 5) {
      item.quality += 2
    } else if (item.sellIn >= 0) {
      item.quality += 3
    } else {
      item.quality = MIN_QUALITY
    }
  }
}

module.exports = {
  Item,
  Shop
}
