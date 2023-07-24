const {
  Shop,
  StandardItem,
  AgedBrieItem,
  SulfurasItem,
  BackstagePassesItem,
  ConjuredItem
} = require('../src/gilded_rose.js')
describe('updateQuality', function () {
  it('should decrease standard item quality and sellIn by 1', function () {
    const gildedRose = new Shop([new StandardItem('foo', 10, 10)])
    const items = gildedRose.updateQualityOfItems()
    expect(items[0]).toEqual(new StandardItem('foo', 9, 9))
  })

  it('should decrease Conjured item quality by 2 and sellIn by 1', function () {
    const gildedRose = new Shop([new ConjuredItem(10, 10)])
    const items = gildedRose.updateQualityOfItems()
    expect(items[0]).toEqual(new ConjuredItem(9, 8))
  })

  it('should decrease standard item quality by 2 and sellIn by 1 after sellByDate', function () {
    const gildedRose = new Shop([new StandardItem('foo', 0, 10)])
    const items = gildedRose.updateQualityOfItems()
    expect(items[0]).toEqual(new StandardItem('foo', -1, 8))
  })

  it('should decrease Conjured item quality by 4 and sellIn by 1 after sellByDate', function () {
    const gildedRose = new Shop([new ConjuredItem(0, 10)])
    const items = gildedRose.updateQualityOfItems()
    expect(items[0]).toEqual(new ConjuredItem(-1, 6))
  })

  it('should not decrease item quality beyond 0', function () {
    const gildedRose = new Shop([new StandardItem('foo', 10, 1)])
    gildedRose.updateQualityOfItems()
    const items = gildedRose.updateQualityOfItems()
    expect(items[0]).toEqual(new StandardItem('foo', 8, 0))
  })

  it('should increase Aged Brie quality', function () {
    const gildedRose = new Shop([new AgedBrieItem('Aged Brie', 10, 10)])
    const items = gildedRose.updateQualityOfItems()
    expect(items[0]).toEqual(new AgedBrieItem('Aged Brie', 9, 11))
  })

  it('should not increase item quality beyond 50', function () {
    const gildedRose = new Shop([new AgedBrieItem('Aged Brie', 10, 49)])
    gildedRose.updateQualityOfItems()
    const items = gildedRose.updateQualityOfItems()
    expect(items[0]).toEqual(new AgedBrieItem('Aged Brie', 8, 50))
  })

  it('should not modify Sulfuras item', function () {
    const gildedRose = new Shop([new SulfurasItem(0)])
    const items = gildedRose.updateQualityOfItems()
    expect(items[0]).toEqual(new SulfurasItem(0))
  })

  it('should increase Backstage passes quality properly for 6 or more days', function () {
    const gildedRose = new Shop([new BackstagePassesItem(11, 10)])

    let items = gildedRose.updateQualityOfItems()
    expect(items[0]).toEqual(new BackstagePassesItem(10, 11))

    items = gildedRose.updateQualityOfItems()
    expect(items[0]).toEqual(new BackstagePassesItem(9, 13))
  })

  it('should increase Backstage passes quality properly for 5 days', function () {
    const gildedRose = new Shop([new BackstagePassesItem(5, 10)])

    const items = gildedRose.updateQualityOfItems()
    expect(items[0]).toEqual(new BackstagePassesItem(4, 13))
  })

  it('should drop Backstage passes quality properly to 0 after the concert', function () {
    const gildedRose = new Shop([new BackstagePassesItem(1, 10)])

    let items = gildedRose.updateQualityOfItems()
    expect(items[0]).toEqual(new BackstagePassesItem(0, 13))

    items = gildedRose.updateQualityOfItems()
    expect(items[0]).toEqual(new BackstagePassesItem(-1, 0))
  })
})
