const UpgradableItem = require('../src/items/UpgradableItem')

describe('UpgradableItem', function () {
  let item
  beforeEach(() => {
    item = new UpgradableItem('foo', 10, 10)
  })
  it('decrease quality over time', () => {
    item.updateQuality()
    expect(item.quality).toEqual(9)
    expect(item.sellIn).toEqual(9)
  })

  it('quality does not go under 0', () => {
    for (let i = 0; i < 50; i++) { item.updateQuality() }
    expect(item.quality).toEqual(0)
    expect(item.sellIn).toEqual(-40)
  })
})
