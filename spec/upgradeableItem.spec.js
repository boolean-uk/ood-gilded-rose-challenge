const UpdateableItem = require('../src/items/UpdateableItem')

describe('UpdateableItem', function () {
  let item
  beforeEach(() => {
    item = new UpdateableItem('foo', 10, 10)
  })
  it('decreases quality over time', () => {
    item.updateQuality()
    expect(item.quality).toEqual(9)
    expect(item.sellIn).toEqual(9)
  })

  it('quality does not go under 0', () => {
    for (let i = 0; i < 50; i++) { item.updateQuality() }
    expect(item.quality).toEqual(0)
    expect(item.sellIn).toEqual(-40)
  })

  it('descreases quality twice as fast after sell date', () => {
    item.sellIn = 0
    item.updateQuality()
    expect(item.quality).toEqual(8)
    expect(item.sellIn).toEqual(-1)
  })
})
