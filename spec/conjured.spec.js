const Conjured = require('../src/items/conjured')

describe('Conjured', function () {
  it('decreases quality twice as fast', () => {
    const item = new Conjured('foo', 10, 10)
    item.updateQuality()
    expect(item.quality).toEqual(8)
    expect(item.sellIn).toEqual(9)
  })

  it('decreases quality twice as fast after sell time', () => {
    const item = new Conjured('foo', 0, 10)
    item.updateQuality()
    expect(item.quality).toEqual(6)
    expect(item.sellIn).toEqual(-1)
  })
})
