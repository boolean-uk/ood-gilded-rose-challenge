const Item = require('./Item.js')
class BackstagePass extends Item {
  update() {
    if (this.quality < 50) this.quality++
    if (this.sellIn < 11 && this.quality < 50) this.quality++
    if (this.sellIn < 6 && this.quality < 50) this.quality++
    this.sellIn--
    if (this.sellIn < 0) this.quality = 0
  }
}

module.exports = BackstagePass
