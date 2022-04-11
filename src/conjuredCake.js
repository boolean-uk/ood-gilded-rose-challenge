class ConjuredCake extends standardItem {
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