const Shop = require('../src/shop.js')
const Item = require('../src/item.js')
const AgedBrie = require('../src/agedbrie.js')

describe('Aged Brie', () => {
  it('quality increased by 1', () => {
    const agedBrie = new AgedBrie('Aged Brie', 4, 5)
    // const items = [agedBrie]
    // const shop = new Shop(items)
    // shop.updateQuality()
    agedBrie.updateQuality()
    expect(agedBrie.sellIn).toEqual(3)
    expect(agedBrie.quality).toEqual(6)
  })

  it('quality increases by 2', () => {
    const agedBrie = new AgedBrie('Aged Brie', 0, 5)
    const items = [agedBrie]
    const shop = new Shop(items)
    shop.updateQuality()
    expect(agedBrie.sellIn).toEqual(-1)
    expect(agedBrie.quality).toEqual(7)
  })

  it('quality never more than 50', () => {
    const agedBrie = new AgedBrie('Aged Brie', 4, 50)
    const items = [agedBrie]
    const shop = new Shop(items)
    shop.updateQuality()
    expect(agedBrie.sellIn).toEqual(3)
    expect(agedBrie.quality).toEqual(50)
  })
})
