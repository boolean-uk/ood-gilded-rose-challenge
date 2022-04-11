class Brie {
  update(item) {
    item.sellIn--

    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality = item.quality + 1
    }
  }
}

module.exports = Brie
