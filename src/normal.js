const Items = require('./item')

class Normal extends Items {
  //   +5 Dexterity Vest
  // Elixir of the Mongoose

  constructor(sellIn, quality) {
    super('normal', sellIn, quality)
  }

  update() {
    this.sellIn--
    if (this.quality < 50 && this.quality > 0) this.quality--
    if (this.sellIn <= 0 && this.quality > 0) this.quality--
  }
}

module.exports = Normal
