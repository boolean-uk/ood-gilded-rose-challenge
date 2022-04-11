class Conjured {
  updateConjured(item) {
    item.sellIn--
    item.quality -= 2
  }
}

module.exports = Conjured
