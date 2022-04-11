const Item = require('../src/item.js')
const BackstagePass = require('../src/backstage_passes.js')

describe('backstage passes', function () {
  // TEST1
  it('quality increses by 1 - when sell-in is > 10 days', function () {
    // setup
    const classBackstagepasses = new BackstagePass()
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10)
    // execute
    classBackstagepasses.updateBackstagePass(item)
    // verify
    expect(item.name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(item.sellIn).toEqual(14)
    expect(item.quality).toEqual(11)
  })

  // TEST2
  it('quality increses by 2 - when sell-in is between 10-6 days', function () {
    // setup
    const classBackstagepasses = new BackstagePass()
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)
    // execute
    classBackstagepasses.updateBackstagePass(item)
    // verify
    expect(item.name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(item.sellIn).toEqual(9)
    expect(item.quality).toEqual(12)
  })

  // TEST3
  it('quality increses by 3 - when sell-in is < 5 days', function () {
    // setup
    const classBackstagepasses = new BackstagePass()
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 4, 10)
    // execute
    classBackstagepasses.updateBackstagePass(item)
    // verify
    expect(item.name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(item.sellIn).toEqual(3)
    expect(item.quality).toEqual(13)
  })

  // TEST4
  it('quality drops to 0 when sell-in is < 0', function () {
    // setup
    const classBackstagepasses = new BackstagePass()
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 32)
    // execute
    classBackstagepasses.updateBackstagePass(item)
    // verify
    // console.log("IN TEST - ITEMS: ", items)
    expect(item.name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(item.sellIn).toEqual(-2)
    expect(item.quality).toEqual(0)
  })
})
