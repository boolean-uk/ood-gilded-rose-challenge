class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateQuality() {
    return this.items.map(el => el.update())
  }
}

module.exports = Shop
