class Standard {
  constructor(item) {
    this.item = item
  }

  update() {
    if (this.item.quality === 0) {
      this.item.sellIn--
    } else if (this.item.sellIn < 0) {
      this.item.sellIn--
      this.item.quality -= 2
    } else {
      this.item.sellIn--
      this.item.quality--
    }
  }
}

module.exports = Standard
