const Pass = require('../src/items/pass')

describe('Pass', function () {
  it('inscreases quality by 2 when sellIn < 10', () => {
    const item = new Pass('Backstage pass', 10, 10)
    item.updateQuality()
    expect(item.quality).toEqual(12)
    expect(item.sellIn).toEqual(9)
  })

  it('inscreases quality by 3 when sellIn < 5', () => {
    const item = new Pass('Backstage pass', 5, 10)
    item.updateQuality()
    expect(item.quality).toEqual(13)
    expect(item.sellIn).toEqual(4)
  })

  it('set quality to 0 after sell time', () => {
    const item = new Pass('Backstage pass', 0, 10)
    item.updateQuality()
    expect(item.quality).toEqual(0)
    expect(item.sellIn).toEqual(-1)
  })
})
