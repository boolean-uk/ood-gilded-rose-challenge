var { Shop, Item, AgedBrie, BackstagePasses, BasicItem, Sulfuras } = require('../src/gilded_rose.js')
// describe('Gilded Rose', function () {
//   it('should foo', function () {
//     const gildedRose = new Shop([new Item('foo', 0, 0)])
//     const items = gildedRose.updateQuality()
//     expect(items[0].name).toEqual('fixme')
//   })
// })

describe("Gilded Rose", () => {
  let basicItem
  let agedBrie
  let sulfuras
  let backstagePasses
  let items
  let shop

  beforeEach(() => { 
    basicItem = new BasicItem("basicItem",5,20)
     agedBrie = new AgedBrie("agedBrie",5,5)
     sulfuras = new Sulfuras("sulfuras",0,80)
     backstagePasses = new BackstagePasses("backstage passes",4,5)
     items = [ basicItem,agedBrie,sulfuras,backstagePasses]
     shop = new Shop(items)
  })

  it("checking quality for basicItem without calling any method - should return equal", () => {
      expect(basicItem.quality).toEqual(20)
  })

  it("checking name for agedBrie without calling any method - should return equal", () => {
    expect(agedBrie.name).toEqual('agedBrie')
})

it("checking sellIn for agedBrie without calling any method - should return equal", () => {
  expect(agedBrie.sellIn).toEqual(5)
})

it("checking quality for all objects after calling method only once - should return equal", () => {
  shop.updateQuality()
  expect(basicItem.sellIn).toEqual(4)
  expect(agedBrie.sellIn).toEqual(4)
  expect(sulfuras.sellIn).toEqual(0)
  expect(backstagePasses.sellIn).toEqual(3)
})

it("checking quality for all objects after calling method only once - should return equal", () => {
  shop.updateQuality()
  expect(basicItem.sellIn).toEqual(4)
  expect(agedBrie.sellIn).toEqual(4)
  expect(sulfuras.sellIn).toEqual(0)
  expect(backstagePasses.sellIn).toEqual(3)
})

it("checking sellIn for all objects after calling method only once - should return equal", () => {
  shop.updateQuality()
  expect(basicItem.sellIn).toEqual(4)
  expect(agedBrie.sellIn).toEqual(4)
  expect(sulfuras.sellIn).toEqual(0)
  expect(backstagePasses.sellIn).toEqual(3)
})

it("checking quality for all objects after calling method twice - should return equal", () => {
  shop.updateQuality()
  shop.updateQuality()
  expect(basicItem.quality).toEqual(18)
  expect(agedBrie.quality).toEqual(7)
  expect(sulfuras.quality).toEqual(80)
  expect(backstagePasses.quality).toEqual(11)
})

it("checking all fields for agedBrie after calling method three times - should return equal", () => {
  shop.updateQuality()
  shop.updateQuality()
  shop.updateQuality()
  expect(agedBrie.name).toEqual('agedBrie')
  expect(agedBrie.sellIn).toEqual(2)
  expect(agedBrie.quality).toEqual(8)
})

it("checking all fields for sulfuras after calling method ten times - should return equal", () => {
  shop.updateQuality()
  shop.updateQuality()
  shop.updateQuality()
  shop.updateQuality()
  shop.updateQuality()
  shop.updateQuality()
  shop.updateQuality()
  shop.updateQuality()
  shop.updateQuality()
  shop.updateQuality()
  expect(sulfuras.name).toEqual('sulfuras')
  expect(sulfuras.sellIn).toEqual(0)
  expect(sulfuras.quality).toEqual(80)
})
})