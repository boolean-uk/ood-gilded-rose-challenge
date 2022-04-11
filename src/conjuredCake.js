const StandardItem = require('./standardItem')

class ConjuredCake extends StandardItem {
  update() {
    if (this.quality > 0) {
      this.quality -= 2
      if (this.sellIn < 0) {
        this.quality -= 2
      }
    }
    this.updateSellIn()
  }
}
module.exports = ConjuredCake
