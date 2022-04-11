const ConjuredCake = require('../src/conjuredCake.js')

describe('Conjured Cake', () => {
  let conjuredCake, conjuredCake2
  beforeEach(() => {
    conjuredCake = new ConjuredCake("Conjured Mana Cake", 3, 6)
    conjuredCake2 = new ConjuredCake("Conjured Mana Cake", 0, 10)
  })

  it("always decrease sellIn by 1", () => {
    const days = 2
    for (let i = 0; i < days; i++) {
      conjuredCake.update()
    }
    const result = conjuredCake.sellIn
    expect(result).toEqual(1)
  })

  it("keeps decreasing sellIn below 0", () => {
    const days = 10
    for (let i = 0; i < days; i++) {
      conjuredCake.update()
    }
    const result = conjuredCake.sellIn
    expect(result).toEqual(-7)
  })

  it("decreases quality -2 per day if sellIn is 0 or more", () => {
    const days = 2
    for (let i = 0; i < days; i++) {
      conjuredCake.update()
    }
    const result = conjuredCake.quality
    expect(result).toEqual(2)
  })

  it("decreases quality -4 per day if sellIn is below 0", () => {
    const days = 2
    for (let i = 0; i < days; i++) {
      conjuredCake2.update()
    }
    const result = conjuredCake2.quality
    expect(result).toEqual(2)
  })

  it("stops decreasing quality once the value 0 is reached", () => {
    const days = 5
    for (let i = 0; i < days; i++) {
      conjuredCake.update()
    }
    const result = conjuredCake.quality
    expect(result).toEqual(0)
  })
})
