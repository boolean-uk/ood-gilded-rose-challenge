const BackstagePass = require('../src/backstagePass.js')
const Item = require('../src/item.js')

describe('Backstage Pass', () => {
  it('quality increased by 1', () => {
    const backstagePass = new BackstagePass(
      'Backstage passes to a TAFKAL80ETC concert',
      15,
      5
    )

    backstagePass.updateQuality(backstagePass)
    expect(backstagePass.sellIn).toEqual(14)
    expect(backstagePass.quality).toEqual(6)
  })

  it('quality increased by 2', () => {
    const backstagePass = new BackstagePass(
      'Backstage passes to a TAFKAL80ETC concert',
      10,
      5
    )

    backstagePass.updateQuality(backstagePass)

    expect(backstagePass.sellIn).toEqual(9)
    expect(backstagePass.quality).toEqual(7)
  })

  it('quality increased by 3', () => {
    const backstagePass = new BackstagePass(
      'Backstage passes to a TAFKAL80ETC concert',
      5,
      5
    )

    backstagePass.updateQuality(backstagePass)

    expect(backstagePass.sellIn).toEqual(4)
    expect(backstagePass.quality).toEqual(8)
  })

  it('quality goes to zero', () => {
    const backstagePass = new BackstagePass(
      'Backstage passes to a TAFKAL80ETC concert',
      0,
      5
    )

    backstagePass.updateQuality(backstagePass)

    expect(backstagePass.sellIn).toEqual(-1)
    expect(backstagePass.quality).toEqual(0)
  })
})
