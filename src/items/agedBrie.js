const UpgradableItem = require('./UpgradableItem')

class AgedBrie extends UpgradableItem {
  constructor (sellIn, quality) {
    super('Aged brie', sellIn, quality)
  }

  updateQuality () {
    if (this.quality < 50) {
      this.quality += 1
    }
    this.sellIn -= 1
  }
}

module.exports = AgedBrie
