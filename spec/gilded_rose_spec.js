const { Shop, Item } = require('../src/gilded_rose.js')
describe('Gilded Rose', function () {
  let items, gildedRose

  beforeEach(() => {
    items = [
      new Item('+5 Dexterity Vest', 10, 20),
      new Item('Aged Brie', 2, 0),
      new Item('Elixir of the Mongoose', 5, 7),
      new Item('Sulfuras, Hand of Ragnaros', 0, 80),
      new Item('Sulfuras, Hand of Ragnaros', -1, 80),
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
      new Item('Conjured Mana Cake', 3, 6)
    ]

    gildedRose = new Shop(items)
  })

  it('should update quality on day 1', () => {
    gildedRose.updateQuality()

    expect(gildedRose.items[0]).toEqual(new Item('+5 Dexterity Vest', 9, 19))
    expect(gildedRose.items[1]).toEqual(new Item('Aged Brie', 1, 1))
    expect(gildedRose.items[2]).toEqual(
      new Item('Elixir of the Mongoose', 4, 6)
    )
    expect(gildedRose.items[3]).toEqual(
      new Item('Sulfuras, Hand of Ragnaros', 0, 80)
    )
    expect(gildedRose.items[4]).toEqual(
      new Item('Sulfuras, Hand of Ragnaros', -1, 80)
    )
    expect(gildedRose.items[5]).toEqual(
      new Item('Backstage passes to a TAFKAL80ETC concert', 14, 21)
    )
    expect(gildedRose.items[6]).toEqual(
      new Item('Backstage passes to a TAFKAL80ETC concert', 9, 50)
    )
    expect(gildedRose.items[7]).toEqual(
      new Item('Backstage passes to a TAFKAL80ETC concert', 4, 50)
    )
    expect(gildedRose.items[8]).toEqual(new Item('Conjured Mana Cake', 2, 5))
  })

  it('should update quality on day 10', () => {
    for (let i = 0; i < 10; i++) gildedRose.updateQuality()

    expect(gildedRose.items[0]).toEqual(new Item('+5 Dexterity Vest', 0, 10))
    expect(gildedRose.items[1]).toEqual(new Item('Aged Brie', -8, 18))
    expect(gildedRose.items[2]).toEqual(
      new Item('Elixir of the Mongoose', -5, 0)
    )
    expect(gildedRose.items[3]).toEqual(
      new Item('Sulfuras, Hand of Ragnaros', 0, 80)
    )
    expect(gildedRose.items[4]).toEqual(
      new Item('Sulfuras, Hand of Ragnaros', -1, 80)
    )
    expect(gildedRose.items[5]).toEqual(
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 35)
    )
    expect(gildedRose.items[6]).toEqual(
      new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50)
    )
    expect(gildedRose.items[7]).toEqual(
      new Item('Backstage passes to a TAFKAL80ETC concert', -5, 0)
    )
    expect(gildedRose.items[8]).toEqual(new Item('Conjured Mana Cake', -7, 0))
  })

  it('should update quality on day 20', () => {
    for (let i = 0; i < 20; i++) gildedRose.updateQuality()

    expect(gildedRose.items[0]).toEqual(new Item('+5 Dexterity Vest', -10, 0))
    expect(gildedRose.items[1]).toEqual(new Item('Aged Brie', -18, 38))
    expect(gildedRose.items[2]).toEqual(
      new Item('Elixir of the Mongoose', -15, 0)
    )
    expect(gildedRose.items[3]).toEqual(
      new Item('Sulfuras, Hand of Ragnaros', 0, 80)
    )
    expect(gildedRose.items[4]).toEqual(
      new Item('Sulfuras, Hand of Ragnaros', -1, 80)
    )
    expect(gildedRose.items[5]).toEqual(
      new Item('Backstage passes to a TAFKAL80ETC concert', -5, 0)
    )
    expect(gildedRose.items[6]).toEqual(
      new Item('Backstage passes to a TAFKAL80ETC concert', -10, 0)
    )
    expect(gildedRose.items[7]).toEqual(
      new Item('Backstage passes to a TAFKAL80ETC concert', -15, 0)
    )
    expect(gildedRose.items[8]).toEqual(new Item('Conjured Mana Cake', -17, 0))
  })

  it('should update quality on day 30', () => {
    for (let i = 0; i < 30; i++) gildedRose.updateQuality()

    expect(gildedRose.items[0]).toEqual(new Item('+5 Dexterity Vest', -20, 0))
    expect(gildedRose.items[1]).toEqual(new Item('Aged Brie', -28, 50))
    expect(gildedRose.items[2]).toEqual(
      new Item('Elixir of the Mongoose', -25, 0)
    )
    expect(gildedRose.items[3]).toEqual(
      new Item('Sulfuras, Hand of Ragnaros', 0, 80)
    )
    expect(gildedRose.items[4]).toEqual(
      new Item('Sulfuras, Hand of Ragnaros', -1, 80)
    )
    expect(gildedRose.items[5]).toEqual(
      new Item('Backstage passes to a TAFKAL80ETC concert', -15, 0)
    )
    expect(gildedRose.items[6]).toEqual(
      new Item('Backstage passes to a TAFKAL80ETC concert', -20, 0)
    )
    expect(gildedRose.items[7]).toEqual(
      new Item('Backstage passes to a TAFKAL80ETC concert', -25, 0)
    )
    expect(gildedRose.items[8]).toEqual(new Item('Conjured Mana Cake', -27, 0))
  })
})
