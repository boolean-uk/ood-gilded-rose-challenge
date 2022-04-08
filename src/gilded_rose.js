class Shop {
  constructor (items = []) {
    this.items = items;
  }
  updateQuality () {
    this.items.forEach(x => x.update())
    return this.items;
  }
}

module.exports = Shop