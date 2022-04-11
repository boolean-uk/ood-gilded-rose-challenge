class AgedBrie extends standardItem {
  update() {
    this.updateSellIn()
    if (this.quality < 50) {
      this.quality++
      if (this.sellIn < 0) {
      this.quality++
      }
    }
  }
}