const Item = require('../src/item.js')
const Shop = require('../src/shop.js')

describe('conjured items', function () {
  // TEST1
  it('quality degrades twice as fast as normal items', function () {
    // setup
    const item = new Item('Conjured Mana Cake', 3, 6)
    const shop = new Shop([item])
    // execute
    shop.updateQuality()
    // verify
    expect(item.name).toEqual('Conjured Mana Cake')
    expect(item.sellIn).toEqual(2)
    expect(item.quality).toEqual(4)
  })
})
