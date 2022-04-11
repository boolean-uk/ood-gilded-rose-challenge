const StandardItem = require('./standardItem')

class AgedBrie extends StandardItem {
  update() {
    this.updateSellIn()
    if (this.quality < 50) this.quality++
    if (this.quality < 50 && this.sellIn < 0) this.quality++
  }
}
module.exports = AgedBrie
