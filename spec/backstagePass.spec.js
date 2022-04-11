const BackstagePass = require('../src/backstagePass')

describe('Backstage Pass', () => {
  let pass1, pass2
  beforeEach(() => {
    pass1 = new BackstagePass(
      'Backstage passes to a TAFKAL80ETC concert',
      15,
      20
    )
    pass2 = new BackstagePass(
      'Backstage passes to a TAFKAL80ETC concert',
      10,
      49
    )
  })

  it('always decrease sellIn by 1', () => {
    const days = 5
    for (let i = 0; i < days; i++) {
      pass1.update()
    }
    expect(pass1.sellIn).toEqual(10)
  })

  it('keeps decreasing sellIn below 0', () => {
    const days = 20
    for (let i = 0; i < days; i++) {
      pass1.update()
    }
    expect(pass1.sellIn).toEqual(-5)
  })

  it('increases quality +1 per day if sellIn is more than 10', () => {
    const days = 5
    for (let i = 0; i < days; i++) {
      pass1.update()
    }
    expect(pass1.quality).toEqual(25)
  })

  it('increases quality +2 per day if sellIn is 10 or less', () => {
    const days = 7
    for (let i = 0; i < days; i++) {
      pass1.update()
    }
    expect(pass1.quality).toEqual(29)
  })

  it('increases quality +3 per day if sellIn is 5 or less', () => {
    const days = 12
    for (let i = 0; i < days; i++) {
      pass1.update()
    }
    expect(pass1.quality).toEqual(41)
  })

  it('stops increasing quality once the value 50 is reached', () => {
    const days = 3
    for (let i = 0; i < days; i++) {
      pass2.update()
    }
    expect(pass2.quality).toEqual(50)
  })

  it('drops quality to 0 if sellIn goes below 0', () => {
    const days = 16
    for (let i = 0; i < days; i++) {
      pass1.update()
    }
    expect(pass1.quality).toEqual(0)
  })
})
