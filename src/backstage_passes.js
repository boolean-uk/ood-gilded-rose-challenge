class BackstagePass {
  constructor(item) {
    this.item = item
  }

  update() {
    if (this.item.sellIn < 0) {
      this.item.sellIn--
      this.item.quality = 0
    } else if (this.item.sellIn > 10) {
      this.item.sellIn--
      this.item.quality++
    } else if (this.item.sellIn <= 10 && this.item.sellIn > 5) {
      this.item.sellIn--
      this.item.quality += 2
    } else if (this.item.sellIn <= 5) {
      this.item.sellIn--
      this.item.quality += 3
    }
  }
}

module.exports = BackstagePass
