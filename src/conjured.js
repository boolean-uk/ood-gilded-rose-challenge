class Conjured {
  update(item) {
    item.sellIn--
    if (item.quality < 50 && item.quality > 0) item.quality -= 2
    if (item.sellIn <= 0 && item.quality > 0) item.quality -= 2
  }
}

module.exports = Conjured
