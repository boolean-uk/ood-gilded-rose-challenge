const UpdateableItem = require('./UpdateableItem')

class Sulfuras extends UpdateableItem {
  constructor (name, sellIn, quality) {
    super('Sulfuras,' + name, sellIn, quality)
  }

  update() {
    // do nothing
  }
}
module.exports = Sulfuras
