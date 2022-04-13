const Sulfuras = require('../src/items/sulfuras')

describe('Sulfuras', function () {
  it('Never changes', () => {
    const item = new Sulfuras('foo', 10, 10)
    item.update()
    expect(item.quality).toEqual(10)
    expect(item.sellIn).toEqual(10)
  })
})
