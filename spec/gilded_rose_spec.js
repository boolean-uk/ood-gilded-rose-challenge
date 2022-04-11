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

  it('decreases backstage sellIn and increases quality', () =>{
    // setup
    const backstage = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)
    const gildedRose = new Shop([backstage])
    gildedRose.updateQuality()

    // verify
    expect(gildedRose.items[0].sellIn).toEqual(14)
    expect(gildedRose.items[0].quality).toEqual(21)
  })

  it('decreases backstage sellIn and increases double of quality', () =>{
    // setup
    const backstage = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)
    const gildedRose = new Shop([backstage])
    gildedRose.updateQuality()

    // verify
    expect(gildedRose.items[0].sellIn).toEqual(9)
    expect(gildedRose.items[0].quality).toEqual(22)
  })

  it('decreases backstage sellIn and increases triple of quality', () =>{
    // setup
    const backstage = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)
    const gildedRose = new Shop([backstage])
    gildedRose.updateQuality()

    // verify
    expect(gildedRose.items[0].sellIn).toEqual(4)
    expect(gildedRose.items[0].quality).toEqual(23)
  })

  it('decreases backstage sellIn and drops to quality 0', () =>{
    // setup
    const backstage = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)
    const gildedRose = new Shop([backstage])
    gildedRose.updateQuality()

    // verify
    expect(gildedRose.items[0].sellIn).toEqual(-2)
    expect(gildedRose.items[0].quality).toEqual(0)
  })
})
