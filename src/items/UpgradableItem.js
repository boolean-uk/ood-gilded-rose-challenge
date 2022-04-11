const Item = require('../item')
class UpgradableItem extends Item {
  constructor () {
    super(...arguments)
  }

  updateQuality () {
    // basic item strucutre
    if (this.quality > 0) { this.quality -= 1 }
    this.sellIn -= 1
  }
}

module.exports = UpgradableItem
