const Shop = require('../src/gilded_rose.js')
const Item = require('../src/item.js')

describe('Aged Brie', () => {
  it('quality increases by 1', () => {
    const agedBrie = new Item('Aged Brie', 4, 5)
    const items = [agedBrie]
    const shop = new Shop(items)
    shop.updateQuality()

    expect(agedBrie.sellIn).toEqual(3)
    expect(agedBrie.quality).toEqual(6)
  })

  it('quality increases by 2', () => {
    const agedBrie = new Item('Aged Brie', 0, 5)
    const items = [agedBrie]
    const shop = new Shop(items)
    shop.updateQuality()

    expect(agedBrie.sellIn).toEqual(-1)
    expect(agedBrie.quality).toEqual(7)
  })

  it('quality never more than 50', () => {
    const agedBrie = new Item('Aged Brie', 4, 50)
    const items = [agedBrie]
    const shop = new Shop(items)
    shop.updateQuality()

    expect(agedBrie.sellIn).toEqual(3)
    expect(agedBrie.quality).toEqual(50)
  })
})

describe('Backstage passes to a TAFKAL80ETC concert', () => {
  it('quality increases by 1 if item quality < 50', () => {
    const backstage = new Item(
      'Backstage passes to a TAFKAL80ETC concert',
      14,
      24
    )
    const items = [backstage]
    const shop = new Shop(items)
    shop.updateQuality()

    // shop.updateBackstagePass(backstage)

    expect(backstage.sellIn).toEqual(13)
    expect(backstage.quality).toEqual(25)
  })

  it('quality increases by 2 if item.sellIn < 11 ', () => {
    const backstage = new Item(
      'Backstage passes to a TAFKAL80ETC concert',
      8,
      29
    )
    const items = [backstage]
    const shop = new Shop(items)
    shop.updateQuality()

    // shop.updateBackstagePass(backstage)

    expect(backstage.sellIn).toEqual(7)
    expect(backstage.quality).toEqual(31)
  })

  it('quality increases by 3 if item.sellIn < 6 ', () => {
    const backstage = new Item(
      'Backstage passes to a TAFKAL80ETC concert',
      5,
      35
    )
    const items = [backstage]
    const shop = new Shop(items)
    shop.updateQuality()

    // shop.updateBackstagePass(backstage)

    expect(backstage.sellIn).toEqual(4)
    expect(backstage.quality).toEqual(38)
  })
})

describe('Gilded Rose', function () {
  it('Day 1: should update all items', function () {
    const startingItems = [
      new Item('+5 Dexterity Vest', 10, 20),
      new Item('Aged Brie', 2, 0),
      new Item('Elixir of the Mongoose', 5, 7),
      new Item('Sulfuras, Hand of Ragnaros', 0, 80),
      new Item('Sulfuras, Hand of Ragnaros', -1, 80),
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),

      // This Conjured item does not work properly yet
      new Item('Conjured Mana Cake', 3, 6),
      new Item('Conjured Mana Cake', 0, 6)
    ]

    const gildedRose = new Shop(startingItems)
    const items = gildedRose.updateQuality()

    // +5 Dexterity Vest
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(19)
    // Aged Brie
    expect(items[1].sellIn).toEqual(1)
    expect(items[1].quality).toEqual(1)
    // Elixir of the Mongoose
    expect(items[2].sellIn).toEqual(4)
    expect(items[2].quality).toEqual(6)
    // Sulfuras, Hand of Ragnaros
    expect(items[3].sellIn).toEqual(0)
    expect(items[3].quality).toEqual(80)
    // Sulfuras, Hand of Ragnaros
    expect(items[4].sellIn).toEqual(-1)
    expect(items[4].quality).toEqual(80)
    // Backstage passes to a TAFKAL80ETC concert
    expect(items[5].sellIn).toEqual(14)
    expect(items[5].quality).toEqual(21)
    // Backstage passes to a TAFKAL80ETC concert
    expect(items[6].sellIn).toEqual(9)
    expect(items[6].quality).toEqual(50)
    // Backstage passes to a TAFKAL80ETC concert
    expect(items[7].sellIn).toEqual(4)
    expect(items[7].quality).toEqual(50)
    // Conjured Mana Cake
    expect(items[8].sellIn).toEqual(2)
    expect(items[8].quality).toEqual(4)

    expect(items[9].sellIn).toEqual(-1)
    expect(items[9].quality).toEqual(2)
  })

  it('Day 30: should update all items', function () {
    const startingItems = [
      new Item('+5 Dexterity Vest', 10, 20),
      new Item('Aged Brie', 2, 0),
      new Item('Elixir of the Mongoose', 5, 7),
      new Item('Sulfuras, Hand of Ragnaros', 0, 80),
      new Item('Sulfuras, Hand of Ragnaros', -1, 80),
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),

      // This Conjured item does not work properly yet
      new Item('Conjured Mana Cake', 3, 6)
    ]

    const gildedRose = new Shop(startingItems)
    for (let i = 0; i < 29; i++) {
      gildedRose.updateQuality()
    }
    const items = gildedRose.updateQuality()

    // +5 Dexterity Vest
    expect(items[0].sellIn).toEqual(-20)
    expect(items[0].quality).toEqual(0)
    // Aged Brie
    expect(items[1].sellIn).toEqual(-28)
    expect(items[1].quality).toEqual(50)
    // Elixir of the Mongoose
    expect(items[2].sellIn).toEqual(-25)
    expect(items[2].quality).toEqual(0)
    // Sulfuras, Hand of Ragnaros
    expect(items[3].sellIn).toEqual(0)
    expect(items[3].quality).toEqual(80)
    // Sulfuras, Hand of Ragnaros
    expect(items[4].sellIn).toEqual(-1)
    expect(items[4].quality).toEqual(80)
    // Backstage passes to a TAFKAL80ETC concert
    expect(items[5].sellIn).toEqual(-15)
    expect(items[5].quality).toEqual(0)
    // Backstage passes to a TAFKAL80ETC concert
    expect(items[6].sellIn).toEqual(-20)
    expect(items[6].quality).toEqual(0)
    // Backstage passes to a TAFKAL80ETC concert
    expect(items[7].sellIn).toEqual(-25)
    expect(items[7].quality).toEqual(0)
    // Conjured Mana Cake
    expect(items[8].sellIn).toEqual(-27)
    expect(items[8].quality).toEqual(0)
  })
})
