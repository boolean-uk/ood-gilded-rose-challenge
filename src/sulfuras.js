const Item = require('./item.js')

class Sulfuras extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }
  updateQuality() {}
}

module.exports = Sulfuras
