const Item = require('../src/item.js')
const Shop = require('../src/shop.js')

describe('sulfuras', function () {
  // TEST1
  it('sell-in date and quality never changes', function () {
    // setup
    const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 80)
    const shop = new Shop([sulfuras])
    // execute
    shop.updateQuality()
    // verify
    expect(sulfuras.name).toEqual('Sulfuras, Hand of Ragnaros')
    expect(sulfuras.sellIn).toEqual(0)
    expect(sulfuras.quality).toEqual(80)
  })
})
