const Brie = require('./brie')
const Backstage = require('./backstage')
const Conjured = require('./conjured')
const Normal = require('./normal')

class Shop {
  constructor(items = []) {
    this.items = items
    this.brie = new Brie()
    this.backstage = new Backstage()
    this.conjured = new Conjured()
    this.normal = new Normal()
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      if (item.name === 'Aged Brie') {
        this.brie.update(item)
      } else if (item.name.includes('Conjured')) {
        this.conjured.update(item)
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.backstage.update(item)
      } else if (item.name === 'Sulfuras, Hand of Ragnaros') {
        continue
      } else {
        this.normal.update(item)
      }
    }

    return this.items
  }
}

module.exports = Shop
