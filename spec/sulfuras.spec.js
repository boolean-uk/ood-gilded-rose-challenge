const Sulfuras = require('../src/sulfuras.js')

describe('Sulfuras', () => {
  let sulfuras
  beforeEach(() => {
    sulfuras = new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80)
  })

  it('maintains sellIn unchanged', () => {
    const days = 5
    for (let i = 0; i < days; i++) {
      sulfuras.update()
    }
    expect(sulfuras.sellIn).toEqual(0)
  })

  it('maintains quality unchanged', () => {
    const days = 5
    for (let i = 0; i < days; i++) {
      sulfuras.update()
    }
    expect(sulfuras.quality).toEqual(80)
  })
})
