'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
// eslint-disable-next-line camelcase
const Item_1 = require('../src/Item')
// eslint-disable-next-line camelcase
const gilded_rose_modified_1 = require('../src/gilded_rose_modified')
describe('Gilded Rose', function () {
  beforeEach(function () {
    // const items = [
    //   new RegularItem('+5 Dexterity Vest', 10, 20),
    //   new AgedItem('Aged Brie', 2, 0),
    //   new RegularItem('Elixir of the Mongoose', 5, 7),
    //   new LegendaryItem('Sulfuras, Hand of Ragnaros', 0, 80),
    //   new LegendaryItem('Sulfuras, Hand of Ragnaros', -1, 80),
    //   new ConcertItem('Backstage passes to a TAFKAL80ETC concert', 15, 20),
    //   new ConcertItem('Backstage passes to a TAFKAL80ETC concert', 10, 49),
    //   new ConcertItem('Backstage passes to a TAFKAL80ETC concert', 5, 49),
    //   new ConjuredItem('Conjured Mana Cake', 3, 6)
    // ]
    // shop = new Shop(items)
  })
  it('should update properly regular items', function () {
    const items = [
      new Item_1.RegularItem('+5 Dexterity Vest', 10, 20),
      new Item_1.RegularItem('+5 Dexterity Vest', 4, 0),
      new Item_1.RegularItem('+5 Dexterity Vest', -4, 0)
    ]
    const shop = new gilded_rose_modified_1.Shop(items)
    shop.updateQuality()
    expect(shop.getItems()[0].getSellIn()).toEqual(9)
    expect(shop.getItems()[0].getQuality()).toEqual(19)
    expect(shop.getItems()[1].getSellIn()).toEqual(3)
    expect(shop.getItems()[1].getQuality()).toEqual(0)
    expect(shop.getItems()[2].getSellIn()).toEqual(-5)
    expect(shop.getItems()[2].getQuality()).toEqual(0)
  })
  it('should update properly legendary items', function () {
    const items = [
      new Item_1.LegendaryItem('Sulfuras, Hand of Ragnaros', -1, 80)
    ]
    const shop = new gilded_rose_modified_1.Shop(items)
    shop.updateQuality()
    expect(shop.getItems()[0].getSellIn()).toEqual(-1)
    expect(shop.getItems()[0].getQuality()).toEqual(80)
  })
  it('should update properly aged items', function () {
    const items = [
      new Item_1.AgedItem('Aged Brie', 2, 0),
      new Item_1.AgedItem('Aged Brie', 0, 4),
      new Item_1.AgedItem('Aged Brie', -4, 7),
      new Item_1.AgedItem('Aged Brie', 2, 50),
      new Item_1.AgedItem('Aged Brie', -4, 49)
    ]
    const shop = new gilded_rose_modified_1.Shop(items)
    shop.updateQuality()
    expect(shop.getItems()[0].getSellIn()).toEqual(1)
    expect(shop.getItems()[0].getQuality()).toEqual(1)
    expect(shop.getItems()[1].getSellIn()).toEqual(-1)
    expect(shop.getItems()[1].getQuality()).toEqual(6)
    expect(shop.getItems()[2].getSellIn()).toEqual(-5)
    expect(shop.getItems()[2].getQuality()).toEqual(9)
    expect(shop.getItems()[3].getSellIn()).toEqual(1)
    expect(shop.getItems()[3].getQuality()).toEqual(50)
    expect(shop.getItems()[4].getSellIn()).toEqual(-5)
    expect(shop.getItems()[4].getQuality()).toEqual(50)
  })
  it('should update properly concert items', function () {
    const items = [
      new Item_1.ConcertItem(
        'Backstage passes to a TAFKAL80ETC concert',
        15,
        33
      ),
      new Item_1.ConcertItem(
        'Backstage passes to a TAFKAL80ETC concert',
        10,
        23
      ),
      new Item_1.ConcertItem(
        'Backstage passes to a TAFKAL80ETC concert',
        3,
        12
      ),
      new Item_1.ConcertItem(
        'Backstage passes to a TAFKAL80ETC concert',
        22,
        49
      ),
      new Item_1.ConcertItem(
        'Backstage passes to a TAFKAL80ETC concert',
        9,
        49
      ),
      new Item_1.ConcertItem(
        'Backstage passes to a TAFKAL80ETC concert',
        4,
        49
      ),
      new Item_1.ConcertItem('Backstage passes to a TAFKAL80ETC concert', 0, 12)
    ]
    const shop = new gilded_rose_modified_1.Shop(items)
    shop.updateQuality()
    expect(shop.getItems()[0].getSellIn()).toEqual(14)
    expect(shop.getItems()[0].getQuality()).toEqual(34)
    expect(shop.getItems()[1].getSellIn()).toEqual(9)
    expect(shop.getItems()[1].getQuality()).toEqual(25)
    expect(shop.getItems()[2].getSellIn()).toEqual(2)
    expect(shop.getItems()[2].getQuality()).toEqual(15)
    expect(shop.getItems()[3].getSellIn()).toEqual(21)
    expect(shop.getItems()[3].getQuality()).toEqual(50)
    expect(shop.getItems()[4].getSellIn()).toEqual(8)
    expect(shop.getItems()[4].getQuality()).toEqual(50)
    expect(shop.getItems()[5].getSellIn()).toEqual(3)
    expect(shop.getItems()[5].getQuality()).toEqual(50)
    expect(shop.getItems()[6].getSellIn()).toEqual(-1)
    expect(shop.getItems()[6].getQuality()).toEqual(0)
  })
  it('should update properly conjured items', function () {
    const items = [
      new Item_1.ConjuredItem('Conjured Mana Cake', 2, 0),
      new Item_1.ConjuredItem('Conjured Mana Cake', 0, 4),
      new Item_1.ConjuredItem('Conjured Mana Cake', -4, 1),
      new Item_1.ConjuredItem('Conjured Mana Cake', 2, 50),
      new Item_1.ConjuredItem('Conjured Mana Cake', -4, 49)
    ]
    const shop = new gilded_rose_modified_1.Shop(items)
    shop.updateQuality()
    expect(shop.getItems()[0].getSellIn()).toEqual(1)
    expect(shop.getItems()[0].getQuality()).toEqual(0)
    expect(shop.getItems()[1].getSellIn()).toEqual(-1)
    expect(shop.getItems()[1].getQuality()).toEqual(2)
    expect(shop.getItems()[2].getSellIn()).toEqual(-5)
    expect(shop.getItems()[2].getQuality()).toEqual(0)
    expect(shop.getItems()[3].getSellIn()).toEqual(1)
    expect(shop.getItems()[3].getQuality()).toEqual(49)
    expect(shop.getItems()[4].getSellIn()).toEqual(-5)
    expect(shop.getItems()[4].getQuality()).toEqual(47)
  })
})
