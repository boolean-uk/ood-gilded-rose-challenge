const Items = require('./item')

class Conjured extends Items {
  constructor(sellIn, quality) {
    super('Conjured Mana Cake', sellIn, quality)
  }

  update() {
    this.sellIn--
    if (this.quality < 50 && this.quality > 0) this.quality -= 2
    if (this.sellIn <= 0 && this.quality > 0) this.quality -= 2
  }
}

module.exports = Conjured
