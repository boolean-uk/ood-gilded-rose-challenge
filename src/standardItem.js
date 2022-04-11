const Item = require('./item')

class StandardItem extends Item {
  update() {
    this.updateSellIn()
    if (this.quality > 0) this.quality--
    if (this.quality > 0 && this.sellIn < 0) this.quality--
  }

  updateSellIn() {
    if (this.name !== 'Sulfuras, Hand of Ragnaros') this.sellIn-- 
  }
}

module.exports = StandardItem