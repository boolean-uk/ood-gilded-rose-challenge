const updaters = {
  'Aged Brie': require('./aged_brie.js'),
  'Backstage passes to a TAFKAL80ETC concert': require('./backstage_passes.js'),
  'Sulfuras, Hand of Ragnaros': require('./sulfuras.js'),
  'Conjured Mana Cake': require('./conjured.js')
}

const Standard = require('./standard_items.js')

class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      const itemClass = updaters[item.name] || Standard
      // eslint-disable-next-line new-cap
      const itemInstance = new itemClass(item)
      itemInstance.update()
    }
    return this.items
  }
}

module.exports = Shop
