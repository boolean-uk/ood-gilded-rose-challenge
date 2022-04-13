const UpdateableItem = require('./UpdateableItem')

class AgedBrie extends UpdateableItem {
  constructor (sellIn, quality) {
    super('Aged brie', sellIn, quality)
  }

  getFactor() {
    return this.sellIn < 0 ? 2 : 1
  }

  updateQuality () {
    if (this.quality < 50) {
      this.quality += 1 * this.getFactor()
    }
  }
}

module.exports = AgedBrie
