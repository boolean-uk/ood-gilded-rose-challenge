const Shop = require('../src/gilded_rose.js')
const StandardItem = require('../src/standardItem.js')
const AgedBrie = require('../src/agedBrie.js')
const BackstagePass = require('../src/backstagePass.js')
const ConjuredCake = require('../src/conjuredCake')
const Sulfuras = require('../src/sulfuras.js')

describe('Gilded Rose', () => {
  let shop,
    vest,
    brie,
    elixir,
    sulfuras1,
    pass1,
    pass2,
    conjuredCake,
    conjuredCake2
  beforeEach(() => {
    vest = new StandardItem('+5 Dexterity Vest', 10, 20)
    brie = new AgedBrie('Aged Brie', 2, 0)
    elixir = new StandardItem('Elixir of the Mongoose', 5, 7)
    sulfuras1 = new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80)
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
    conjuredCake = new ConjuredCake('Conjured Mana Cake', 3, 6)
    conjuredCake2 = new ConjuredCake('Conjured Mana Cake', 1, 30)

    shop = new Shop([
      vest,
      brie,
      elixir,
      sulfuras1,
      pass1,
      pass2,
      conjuredCake,
      conjuredCake2
    ])
  })

  describe('+5 Dexterity Vest', () => {
    it('always decrease sellIn by 1', () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(vest.sellIn).toEqual(5)
    })

    it('keeps decreasing sellIn below 0', () => {
      const days = 15
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(vest.sellIn).toEqual(-5)
    })

    it('decreases quality -1 per day if sellIn is 0 or more', () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(vest.quality).toEqual(15)
    })

    it('decreases quality -2 per day if sellIn is below 0', () => {
      const days = 12
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(vest.quality).toEqual(6)
    })

    it('stops decreasing quality once the value 0 is reached', () => {
      const days = 25
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(vest.quality).toEqual(0)
    })
  })

  describe('Aged Brie', () => {
    it('always decrease sellIn by 1', () => {
      shop.updateQuality()
      expect(brie.sellIn).toEqual(1)
    })

    it('keeps decreasing sellIn below 0', () => {
      const days = 15
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(brie.sellIn).toEqual(-13)
    })

    it('increases quality +1 per day if sellIn is 0 or more', () => {
      const days = 2
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(brie.quality).toEqual(2)
    })

    it('increases quality +2 per day if sellIn is below 0', () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(brie.quality).toEqual(8)
    })

    it('stops increasing quality once the value 50 is reached', () => {
      const days = 30
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(brie.quality).toEqual(50)
    })
  })

  describe('Elixir of the Mongoose', () => {
    it('always decrease sellIn by 1', () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(elixir.sellIn).toEqual(0)
    })

    it('keeps decreasing sellIn below 0', () => {
      const days = 15
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(elixir.sellIn).toEqual(-10)
    })

    it('decreases quality -1 per day if sellIn is 0 or more', () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(elixir.quality).toEqual(2)
    })

    it('decreases quality -2 per day if sellIn is below 0', () => {
      const days = 6
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(elixir.quality).toEqual(0)
    })

    it('stops decreasing quality once the value 0 is reached', () => {
      const days = 25
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(elixir.quality).toEqual(0)
    })
  })

  describe('Sulfuras, Hand of Ragnaros', () => {
    it('maintains sellIn unchanged', () => {
      shop.updateQuality()
      expect(sulfuras1.sellIn).toEqual(0)
    })

    it('maintains quality unchanged', () => {
      shop.updateQuality()
      expect(sulfuras1.quality).toEqual(80)
    })
  })

  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    it('always decrease sellIn by 1', () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(pass1.sellIn).toEqual(10)
    })

    it('keeps decreasing sellIn below 0', () => {
      const days = 20
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(pass1.sellIn).toEqual(-5)
    })

    it('increases quality +1 per day if sellIn is more than 10', () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(pass1.quality).toEqual(25)
    })

    it('increases quality +2 per day if sellIn is 10 or less', () => {
      const days = 7
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(pass1.quality).toEqual(29)
    })

    it('increases quality +3 per day if sellIn is 5 or less', () => {
      const days = 12
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(pass1.quality).toEqual(41)
    })

    it('stops increasing quality once the value 50 is reached', () => {
      const days = 3
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(pass2.quality).toEqual(50)
    })

    it('drops quality to 0 if sellIn goes below 0', () => {
      const days = 16
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(pass1.quality).toEqual(0)
    })
  })

  describe('Conjured Mana Cake', () => {
    it('always decrease sellIn by 1', () => {
      const days = 2
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(conjuredCake.sellIn).toEqual(1)
    })

    it('keeps decreasing sellIn below 0', () => {
      const days = 10
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(conjuredCake.sellIn).toEqual(-7)
    })

    it('decreases quality -2 per day if sellIn is 0 or more', () => {
      const days = 2
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(conjuredCake.quality).toEqual(2)
    })

    it('decreases quality -4 per day if sellIn is below 0', () => {
      const days = 3
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(conjuredCake2.quality).toEqual(20)
    })

    it('stops decreasing quality once the value 0 is reached', () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      expect(conjuredCake.quality).toEqual(0)
    })
  })
})
