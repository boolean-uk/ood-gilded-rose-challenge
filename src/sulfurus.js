const Item = require('./item')

class Sulfurus extends Item {
  constructor(sellIn, quality) {
    super('Sulfuras, Hand of Ragnaros ', sellIn, quality)
  }

  update() {}
}

module.exports = Sulfurus
