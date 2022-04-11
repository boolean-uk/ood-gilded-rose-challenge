class BackstagePass {
  updateBackstagePass(item) {
    if (item.sellIn < 0) {
      item.sellIn--
      item.quality = 0
    } else if (item.sellIn > 10) {
      item.sellIn--
      item.quality++
    } else if (item.sellIn <= 10 && item.sellIn > 5) {
      item.sellIn--
      item.quality += 2
    } else if (item.sellIn <= 5) {
      item.sellIn--
      item.quality += 3
    }
  }
}

module.exports = BackstagePass
