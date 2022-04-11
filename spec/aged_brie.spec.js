const AgedBrie = require('../src/aged_brie.js')
const Item = require('../src/item.js')

describe('aged brie', function () {
  // TEST1
  it('quality increases the older it gets & sell-in reduces', function () {
    // setup
    const agedBrie = new Item('Aged Brie', 5, 10)
    const classAgedBrie = new AgedBrie()
    // execute
    classAgedBrie.updateAgedBrie(agedBrie)
    // verify
    expect(agedBrie.name).toEqual('Aged Brie')
    expect(agedBrie.sellIn).toEqual(4)
    expect(agedBrie.quality).toEqual(11)
  })

  // TEST2
  it('quality never goes above 50', function () {
    // setup
    const agedBrie = new Item('Aged Brie', 5, 50)
    const classAgedBrie = new AgedBrie()
    // execute
    classAgedBrie.updateAgedBrie(agedBrie)
    // verify
    expect(agedBrie.name).toEqual('Aged Brie')
    expect(agedBrie.sellIn).toEqual(4)
    expect(agedBrie.quality).toEqual(50)
  })
})
