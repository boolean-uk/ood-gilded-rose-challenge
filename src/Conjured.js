const Item = require('../src/Item')
class Conjured extends Item {
  update() {
    this.sellIn > 0 ? (this.quality -= 2) : (this.quality -= 4)
    if (this.quality < 0) this.quality = 0
    this.sellIn--
  }
}

module.exports = Conjured
