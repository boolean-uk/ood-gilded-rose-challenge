const StandardItem = require('../src/standardItem.js')

describe('Standard Items', () => {
  let vest, elixir
  beforeEach(() => {
    vest = new StandardItem("+5 Dexterity Vest", 10, 20)
    elixir = new StandardItem("Elixir of the Mongoose", 5, 7)
  })

  describe("+5 Dexterity Vest", () => {

    it("always decrease sellIn by 1", () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        vest.update()
      }
      const result = vest.sellIn
      expect(result).toEqual(5)
    })

    it("keeps decreasing sellIn below 0", () => {
      const days = 15
      for (let i = 0; i < days; i++) {
        vest.update()
      }
      const result = vest.sellIn
      expect(result).toEqual(-5)
    })

    it("decreases quality -1 per day if sellIn is 0 or more", () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        vest.update()
      }
      const result = vest.quality
      expect(result).toEqual(15)
    })

    it("decreases quality -2 per day if sellIn is below 0", () => {
      const days = 12
      for (let i = 0; i < days; i++) {
        vest.update()
      }
      const result = vest.quality
      expect(result).toEqual(6)
    })

    it("stops decreasing quality once the value 0 is reached", () => {
      const days = 25
      for (let i = 0; i < days; i++) {
        vest.update()
      }
      const result = vest.quality
      expect(result).toEqual(0)
    })
  })

  describe("Elixir of the Mongoose", () => {
    it("always decrease sellIn by 1", () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        elixir.update()
      }
      const result = elixir.sellIn
      expect(result).toEqual(0)
    })

    it("keeps decreasing sellIn below 0", () => {
      const days = 15
      for (let i = 0; i < days; i++) {
        elixir.update()
      }
      const result = elixir.sellIn
      expect(result).toEqual(-10)
    })

    it("decreases quality -1 per day if sellIn is 0 or more", () => {
      const days = 5
      for (let i = 0; i < days; i++) {
        elixir.update()
      }
      const result = elixir.quality
      expect(result).toEqual(2)
    })

    it("decreases quality -2 per day if sellIn is below 0", () => {
      const days = 6
      for (let i = 0; i < days; i++) {
        elixir.update()
      }
      const result = elixir.quality
      expect(result).toEqual(0)
    })

    it("stops decreasing quality once the value 0 is reached", () => {
      const days = 25
      for (let i = 0; i < days; i++) {
        elixir.update()
      }
      const result = elixir.quality
      expect(result).toEqual(0)
    })
  })
})
