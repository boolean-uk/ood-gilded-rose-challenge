const Items = require('./item')

class Brie extends Items {
  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality)
  }

  update() {
    this.sellIn--

    if (this.quality < 50) {
      this.quality = this.quality + 1
    }
    if (this.sellIn < 0 && this.quality < 50) {
      this.quality = this.quality + 1
    }
  }
}

module.exports = Brie
