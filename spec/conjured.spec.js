const Item = require('../src/item.js')
const Conjured = require('../src/conjured.js')

describe('conjured items', function () {
  // TEST1
  it('quality degrades twice as fast as normal items', function () {
    // setup
    const item = new Item('Conjured Mana Cake', 3, 6)
    const classConjured = new Conjured()
    // execute
    classConjured.updateConjured(item)
    // verify
    expect(item.name).toEqual('Conjured Mana Cake')
    expect(item.sellIn).toEqual(2)
    expect(item.quality).toEqual(4)
  })
})
