const Shop = require('../src/gilded_rose.js')
const Item = require('../src/item.js')

describe("Gilded Rose", () => {
  let shop, vest, brie, elixir, sulfuras1, pass1, pass2, conjuredCake, conjuredCake2
  beforeEach(() => {
    vest = new Item("+5 Dexterity Vest", 10, 20)
    brie = new Item("Aged Brie", 2, 0)
    elixir = new Item("Elixir of the Mongoose", 5, 7)
    sulfuras1 = new Item("Sulfuras, Hand of Ragnaros", 0, 80)
    pass1 = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)
    pass2 = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)
    conjuredCake = new Item("Conjured Mana Cake", 3, 6)
    conjuredCake2 = new Item("Conjured Mana Cake", 1, 30)

    shop = new Shop([vest, brie, elixir, sulfuras1, pass1, pass2, conjuredCake, conjuredCake2])
  })

  describe("+5 Dexterity Vest", () => {
    it("always decrease sellIn by 1", () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = vest.sellIn
      expect(result).toEqual(5)
    })

    it("keeps decreasing sellIn below 0", () => {
      const days = 15
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = vest.sellIn
      expect(result).toEqual(-5)
    })

    it("decreases quality -1 per day if sellIn is 0 or more", () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = vest.quality
      expect(result).toEqual(15)
    })

    it("decreases quality -2 per day if sellIn is below 0", () => {
      const days = 12
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = vest.quality
      expect(result).toEqual(6)
    })

    it("stops decreasing quality once the value 0 is reached", () => {
      const days = 25
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = vest.quality
      expect(result).toEqual(0)
    })
  })

  describe("Aged Brie", () => {
    it("always decrease sellIn by 1", () => {
      const days = 1
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = brie.sellIn
      expect(result).toEqual(1)
    })

    it("keeps decreasing sellIn below 0", () => {
      const days = 15
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = brie.sellIn
      expect(result).toEqual(-13)
    })

    it("increases quality +1 per day if sellIn is 0 or more", () => {
      const days = 2
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = brie.quality
      expect(result).toEqual(2)
    })

    it("increases quality +2 per day if sellIn is below 0", () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = brie.quality
      expect(result).toEqual(8)
    })

    it("stops increasing quality once the value 50 is reached", () => {
      const days = 30
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = brie.quality
      expect(result).toEqual(50)
    })
  })

  describe("Elixir of the Mongoose", () => {
    it("always decrease sellIn by 1", () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = elixir.sellIn
      expect(result).toEqual(0)
    })

    it("keeps decreasing sellIn below 0", () => {
      const days = 15
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = elixir.sellIn
      expect(result).toEqual(-10)
    })

    it("decreases quality -1 per day if sellIn is 0 or more", () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = elixir.quality
      expect(result).toEqual(2)
    })

    it("decreases quality -2 per day if sellIn is below 0", () => {
      const days = 6
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = elixir.quality
      expect(result).toEqual(0)
    })

    it("stops decreasing quality once the value 0 is reached", () => {
      const days = 25
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = elixir.quality
      expect(result).toEqual(0)
    })
  })

  describe("Sulfuras, Hand of Ragnaros", () => {
    it("maintains sellIn unchanged", () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = sulfuras1.sellIn
      expect(result).toEqual(0)
    })

    it("maintains quality unchanged", () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = sulfuras1.quality
      expect(result).toEqual(80)
    })
  })

  describe("Backstage passes to a TAFKAL80ETC concert", () => {
    it("always decrease sellIn by 1", () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = pass1.sellIn
      expect(result).toEqual(10)
    })

    it("keeps decreasing sellIn below 0", () => {
      const days = 20
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = pass1.sellIn
      expect(result).toEqual(-5)
    })

    it("increases quality +1 per day if sellIn is more than 10", () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = pass1.quality
      expect(result).toEqual(25)
    })

    it("increases quality +2 per day if sellIn is 10 or less", () => {
      const days = 7
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = pass1.quality
      expect(result).toEqual(29)
    })

    it("increases quality +3 per day if sellIn is 5 or less", () => {
      const days = 12
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = pass1.quality
      expect(result).toEqual(41)
    })

    it("stops increasing quality once the value 50 is reached", () => {
      const days = 3
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = pass2.quality
      expect(result).toEqual(50)
    })

    it("drops quality to 0 if sellIn goes below 0", () => {
      const days = 16
      for (let i = 0; i < days; i++) {
        shop.updateQuality()
      }
      const result = pass1.quality
      expect(result).toEqual(0)
    })
  })

  // describe("Conjured Mana Cake", () => {
  //   it("always decrease sellIn by 1", () => {
  //     const days = 2
  //     for (let i = 0; i < days; i++) {
  //       shop.updateQuality()
  //     }
  //     const result = conjuredCake.sellIn
  //     expect(result).toEqual(1)
  //   })

  //   it("keeps decreasing sellIn below 0", () => {
  //     const days = 10
  //     for (let i = 0; i < days; i++) {
  //       shop.updateQuality()
  //     }
  //     const result = conjuredCake.sellIn
  //     expect(result).toEqual(-7)
  //   })

  //   it("decreases quality -2 per day if sellIn is 0 or more", () => {
  //     const days = 2
  //     for (let i = 0; i < days; i++) {
  //       shop.updateQuality()
  //     }
  //     const result = conjuredCake.quality
  //     expect(result).toEqual(2)
  //   })

  //   it("decreases quality -4 per day if sellIn is below 0", () => {
  //     const days = 3
  //     console.log('BEFORE - Cake:', conjuredCake2.quality)
  //     for (let i = 0; i < days; i++) {
  //       shop.updateQuality()
  //     }
  //     console.log('After - Cake:', conjuredCake2.quality)
  //     const result = conjuredCake2.quality
  //     expect(result).toEqual(22)
  //   })

  //   it("stops decreasing quality once the value 0 is reached", () => {
  //     const days = 5
  //     for (let i = 0; i < days; i++) {
  //       shop.updateQuality()
  //     }
  //     const result = conjuredCake.quality
  //     expect(result).toEqual(0)
  //   })
  // })

});
