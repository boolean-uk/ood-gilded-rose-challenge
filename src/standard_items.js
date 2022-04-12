class Standard {
  updateStandard(item) {
    if (item.quality === 0) {
      item.sellIn--
    } else if (item.sellIn < 0) {
      item.sellIn--
      item.quality -= 2
    } else {
      item.sellIn--
      item.quality--
    }
  }
}

module.exports = Standard
