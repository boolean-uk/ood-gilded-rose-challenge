class AgedBrie {
  constructor(item) {
    this.item = item
  }

  update() {
    this.item.sellIn--
    if (this.item.quality < 50) {
      this.item.quality++
    }
    if (this.item.sellIn < 0 && this.item.quality < 50) {
      this.item.quality++
    }
  }
}

module.exports = AgedBrie
