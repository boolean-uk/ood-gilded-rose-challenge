const Sulfuras = require('../src/sulfuras.js')
const Shop = require('../src/shop.js')

describe('Sulfuras, Hand of Ragnaros', () => {
  it('quality never decreases in quality', () => {
    const sulfuras = new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80)
    // const items = [sulfuras]
    // const shop = new Shop(items)
    // shop.updateQuality()
    sulfuras.updateQuality()
    expect(sulfuras.sellIn).toEqual(0)
    expect(sulfuras.quality).toEqual(80)
  })
})
