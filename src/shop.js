const AgedBrie = require('./aged_brie.js')
const BackstagePass = require('./backstage_passes.js')
const Conjured = require('./conjured.js')
const Standard = require('./standard_items.js')
const Sulfuras = require('./sulfuras.js')

class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateQuality() {
    const classAgedBrie = new AgedBrie()
    const classBaskstage = new BackstagePass()
    const classConjured = new Conjured()
    const classStandard = new Standard()
    const classSulfuras = new Sulfuras()

    for (const item of this.items) {
      if (item.name === 'Aged Brie') {
        classAgedBrie.updateAgedBrie(item)
      } else if (item.name.includes('Backstage')) {
        classBaskstage.updateBackstagePass(item)
      } else if (item.name.includes('Sulfuras')) {
        classSulfuras.updateSulfuras(item)
      } else if (item.name.includes('Conjured')) {
        classConjured.updateConjured(item)
      } else {
        classStandard.updateStandard(item)
      }
    }
    return this.items
  }
}

module.exports = Shop
