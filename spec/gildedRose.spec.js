const Shop = require('../src/gilded_rose.js')
const Brie = require('../src/brie')
const Backstage = require('../src/backstage.js')
const Conjured = require('../src/conjured.js')
const Normal = require('../src/normal.js')
const Sulfurus = require('../src/sulfurus.js')

describe('Aged Brie', () => {
  it('quality increases by 1', () => {
    const agedBrie = new Brie(4, 5)
    const items = [agedBrie]
    const shop = new Shop(items)
    shop.updateQuality()

    expect(agedBrie.sellIn).toEqual(3)
    expect(agedBrie.quality).toEqual(6)
  })

  it('quality increases by 2', () => {
    const agedBrie = new Brie(0, 5)
    const items = [agedBrie]
    const shop = new Shop(items)
    shop.updateQuality()

    expect(agedBrie.sellIn).toEqual(-1)
    expect(agedBrie.quality).toEqual(7)
  })

  it('quality never more than 50', () => {
    const agedBrie = new Brie(4, 50)
    const items = [agedBrie]
    const shop = new Shop(items)
    shop.updateQuality()

    expect(agedBrie.sellIn).toEqual(3)
    expect(agedBrie.quality).toEqual(50)
  })
})

describe('Backstage passes to a TAFKAL80ETC concert', () => {
  it('quality increases by 1 if item quality < 50', () => {
    const backstage = new Backstage(14, 24)
    const items = [backstage]
    const shop = new Shop(items)
    shop.updateQuality()

    expect(backstage.sellIn).toEqual(13)
    expect(backstage.quality).toEqual(25)
  })

  it('quality increases by 2 if item.sellIn < 11 ', () => {
    const backstage = new Backstage(8, 29)
    const items = [backstage]
    const shop = new Shop(items)
    shop.updateQuality()

    expect(backstage.sellIn).toEqual(7)
    expect(backstage.quality).toEqual(31)
  })

  it('quality increases by 3 if item.sellIn < 6 ', () => {
    const backstage = new Backstage(5, 35)
    const items = [backstage]
    const shop = new Shop(items)
    shop.updateQuality()

    expect(backstage.sellIn).toEqual(4)
    expect(backstage.quality).toEqual(38)
  })
})

describe('Conjured Mana Cake', () => {
  it('quality decreases by 2 if item quality < 50', () => {
    const conjured = new Conjured(14, 24)

    const items = [conjured]
    const shop = new Shop(items)
    shop.updateQuality()

    expect(conjured.sellIn).toEqual(13)
    expect(conjured.quality).toEqual(22)
  })

  it('quality decreases by 4 if item.sellIn < 0 ', () => {
    const conjured = new Conjured(0, 29)
    const items = [conjured]
    const shop = new Shop(items)
    shop.updateQuality()

    expect(conjured.sellIn).toEqual(-1)
    expect(conjured.quality).toEqual(25)
  })
})

describe('Gilded Rose', function () {
  it('Day 1: should update all items', function () {
    const startingItems = [
      new Normal(10, 20),
      new Brie(2, 0),
      new Normal(5, 7),
      new Sulfurus(0, 80),
      new Sulfurus(-1, 80),
      new Backstage(15, 20),
      new Backstage(10, 49),
      new Backstage(5, 49),

      // This Conjured item does not work properly yet
      new Conjured(3, 6),
      new Conjured(0, 6)
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
      new Normal(10, 20),
      new Brie(2, 0),
      new Normal(5, 7),
      new Sulfurus(0, 80),
      new Sulfurus(-1, 80),
      new Backstage(15, 20),
      new Backstage(10, 49),
      new Backstage(5, 49),

      // This Conjured item does not work properly yet
      new Conjured(3, 6)
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
