const StandardItem = require('./standardItem')

class ConjuredCake extends StandardItem {
  update() {
    this.updateSellIn()
    if (this.quality > 0) this.quality -= 2
    if (this.quality > 0 && this.sellIn < 0) this.quality -= 2
  }
}
module.exports = ConjuredCake
