class Conjured {
  constructor(item) {
    this.item = item
  }

  update() {
    this.item.sellIn--
    this.item.quality -= 2
  }
}

module.exports = Conjured
