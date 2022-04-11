const AgedBrie = require('../src/agedBrie.js')

describe('Aged Brie', () => {
  let brie
  beforeEach(() => {
    brie = new AgedBrie('Aged Brie', 2, 0)
  })

  it('always decrease sellIn by 1', () => {
    brie.update()
    expect(brie.sellIn).toEqual(1)
  })

  it('keeps decreasing sellIn below 0', () => {
    const days = 15
    for (let i = 0; i < days; i++) {
      brie.update()
    }
    expect(brie.sellIn).toEqual(-13)
  })

  it('increases quality +1 per day if sellIn is 0 or more', () => {
    const days = 2
    for (let i = 0; i < days; i++) {
      brie.update()
    }
    expect(brie.quality).toEqual(2)
  })

  it('increases quality +2 per day if sellIn is below 0', () => {
    const days = 5
    for (let i = 0; i < days; i++) {
      brie.update()
    }
    expect(brie.quality).toEqual(8)
  })

  it('stops increasing quality once the value 50 is reached', () => {
    const days = 30
    for (let i = 0; i < days; i++) {
      brie.update()
    }
    expect(brie.quality).toEqual(50)
  })
})
