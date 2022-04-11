const Sulfuras = require('../src/sulfuras.js')

describe('Sulfuras', () => {
  let sulfuras
  beforeEach(() => {
    sulfuras = new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80)
  })

  it("maintains sellIn unchanged", () => {
    const days = 5
    for (let i = 0; i < days; i++) {
      sulfuras.update()
    }
    const result = sulfuras.sellIn
    expect(result).toEqual(0)
  })

  it("maintains quality unchanged", () => {
    const days = 5
    for (let i = 0; i < days; i++) {
      sulfuras.update()
    }
    const result = sulfuras.quality
    expect(result).toEqual(80)
  })
})
