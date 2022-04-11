class Standard {
  updateStandard(item) {
    if (item.quality === 0) {
      item.sellIn--
      return item
    } else if (item.sellIn < 0) {
      item.sellIn--
      item.quality -= 2
      return item
    } else {
      item.sellIn--
      item.quality--
    }
    return item
  }
}

module.exports = Standard
