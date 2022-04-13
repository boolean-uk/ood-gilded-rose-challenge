const Item = require('../item')
class UpdateableItem extends Item {
  getFactor () {
    return this.sellIn < 0 ? 2 : 1
  }

  update () {
    this.updateSellIn()
    this.updateQuality()
  }

  updateQuality () {
    // basic item strucutre
    if (this.quality > 0) {
      this.quality -= 1 * this.getFactor()
    }
  }

  updateSellIn () {
    this.sellIn -= 1
  }
}

module.exports = UpdateableItem
