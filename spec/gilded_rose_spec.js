const Item = require('../src/item')
const Shop = require('../src/shop')

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new Shop([new Item('foo', 0, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('foo')
  })

  it('returns true as every item has a valid quality', () => {
    // setup
    const item1 = new Item('Aged Brie', 2, 0)
    const item2 = new Item('Elixir of the Mongoose', 5, 7)
    const item3 = new Item('Sulfuras, Hand of Ragnaros', 0, 80)
    const gildedRose = new Shop([item1, item2, item3])

    const expected = false
    // verify
    expect(gildedRose.isValidQuality()).toEqual(expected)
  })

  it('returns false as one item is a invalid quality', () => {
    // setup
    const item1 = new Item('Aged Brie', 2, 0)
    const item2 = new Item('Elixir of the Mongoose', 5, 40)
    const item3 = new Item('Sulfuras, Hand of Ragnaros', 0, 70)
    const gildedRose = new Shop([item1, item2, item3])

    const expected = false
    // verify
    expect(gildedRose.isValidQuality()).toEqual(expected)
  })

  it('decreases agedBries sellIn and increases quality', () =>{
    // setup
    const agedBrie = new Item('Aged Brie', 2, 0)
    const gildedRose = new Shop([agedBrie])
    gildedRose.updateQuality()

    // verify
    expect(gildedRose.items[0].sellIn).toEqual(1)
    expect(gildedRose.items[0].quality).toEqual(1)
  })

  fit('decreases agedBries sellIn and increases double of quality', () =>{
    // setup
    const agedBrie = new Item('Aged Brie', 0, 0)
    const gildedRose = new Shop([agedBrie])
    gildedRose.updateQuality()

    // verify
    expect(gildedRose.items[0].sellIn).toEqual(-1)
    expect(gildedRose.items[0].quality).toEqual(2)
  })
})
