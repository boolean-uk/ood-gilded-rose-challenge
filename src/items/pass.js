const UpdateableItem = require('./UpdateableItem')

class Pass extends UpdateableItem {
  getFactor () {
    if (this.sellIn < 5) {
      return -3
    } else if (this.sellIn < 10) {
      return -2
    } else {
      return -1
    }
  }

  updateQuality () {
    if (this.sellIn > 0) return super.updateQuality()
    else {
      this.quality = 0
      return this.quality
    }
  }
}

module.exports = Pass
