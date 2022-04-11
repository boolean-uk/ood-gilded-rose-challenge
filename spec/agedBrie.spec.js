const AgedBrie = require('../src/items/agedBrie')

describe('Aged Brie', function () {
  let item
  beforeEach(() => {
    item = new AgedBrie(10, 10)
  })
  it('increase quality over time', () => {
    item.updateQuality()
    expect(item.quality).toEqual(11)
    expect(item.sellIn).toEqual(9)
  })
})
