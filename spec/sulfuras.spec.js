const Item = require('../src/item.js')
const Sulfuras = require('../src/sulfuras.js')

describe('sulfuras', function () {
  // TEST1
  it('sell-in date and quality never changes', function () {
    // setup
    const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 80)
    const classSulfuras = new Sulfuras()
    // execute
    classSulfuras.updateSulfuras(sulfuras)
    // verify
    expect(sulfuras.name).toEqual('Sulfuras, Hand of Ragnaros')
    expect(sulfuras.sellIn).toEqual(0)
    expect(sulfuras.quality).toEqual(80)
  })
})
