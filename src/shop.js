const update = {
  'Aged Brie': require('./agedBrie'),
  'Backstage passes to a TAFKAL80ETC concert': require('./backstage'),
  'Sulfuras, Hand of Ragnaros': require('./sulfuras'),
  'Conjured Mana Cake': require('./conjured'),
  standard: require('./standard')
}

class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateQuality() {
    for (const item of this.items) {
      ;(update[item.name] || update.standard)(item)
    }
    return this.items
  }
}

module.exports = Shop
