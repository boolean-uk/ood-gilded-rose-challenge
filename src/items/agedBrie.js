const UpdateableItem = require('./UpdateableItem')

class AgedBrie extends UpdateableItem {
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
