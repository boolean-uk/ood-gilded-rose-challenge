const Items = require('./item')

class Backstage extends Items {
  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)
  }

  update() {
    this.sellIn--
    if (this.quality < 50) this.quality++
    if (this.sellIn < 11 && this.quality < 50) this.quality++
    if (this.sellIn < 6 && this.quality < 50) this.quality++
    if (this.sellIn < 0) this.quality = 0
  }
}

module.exports = Backstage
