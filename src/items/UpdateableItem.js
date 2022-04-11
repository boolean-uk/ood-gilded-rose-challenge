const Item = require('../item')
class UpdateableItem extends Item {
  getFactor () {
    return this.sellIn < 0 ? 2 : 1
  }

  updateQuality () {
    // basic item strucutre
    this.sellIn -= 1
    if (this.quality > 0) { this.quality -= 1 * this.getFactor() }
  }
}

module.exports = UpdateableItem
