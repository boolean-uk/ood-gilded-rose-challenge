class BackstagePass extends standardItem {
  update() {
    if (this.quality < 50) {
      this.quality++
    }
    if (this.quality < 50 && this.sellIn <= 10) {
      this.quality++
    }
    if (this.quality < 50 && this.sellIn <= 5) {
      this.quality++
    }
    this.updateSellIn()
    if (this.sellIn < 0) {
      this.quality = 0
    }
  }
}