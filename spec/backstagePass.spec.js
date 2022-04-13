const BackstagePass = require('../src/backstagePass.js')
const Item = require('../src/item.js')

describe('Backstage Pass', () => {
  it('quality increased by 2', () => {
    const backstagePass = new Item(
      'Backstage passes to a TAFKAL80ETC concert',
      10,
      5
    )
    const items = [backstagePass]
    const backstagePass = new BackstagePass(items)
    shop.updateBackstagePass(backstagePass)
    expect(backstagePass.sellIn).toEqual(9)
    expect(backstagePass.quality).toEqual(7)
  })

  it('quality increased by 2', () => {
    const backstagePass = new Item(
      'Backstage passes to a TAFKAL80ETC concert',
      5,
      5
    )
    const items = [backstagePass]
    const shop = new Shop(items)
    shop.updateBackstagePass(backstagePass)
    expect(backstagePass.sellIn).toEqual(4)
    expect(backstagePass.quality).toEqual(8)
  })

  it('quality increased by 2', () => {
    const backstagePass = new Item(
      'Backstage passes to a TAFKAL80ETC concert',
      0,
      5
    )
    const items = [backstagePass]
    const shop = new Shop(items)
    shop.updateBackstagePass(backstagePass)
    expect(backstagePass.sellIn).toEqual(-1)
    expect(backstagePass.quality).toEqual(0)
  })
})
