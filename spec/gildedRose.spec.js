var { Shop, Item } = require('../src/gilded_rose.js')

describe('Gilded Rose', function() {
    it('should return correct name', function() {
        const gildedRose = new Shop([
            new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)
        ])
        const items = gildedRose.updateQuality()
        expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    })

    it('should return array of items added to shop', function() {
        const items = [
            new Item('+5 Dexterity Vest', 10, 20),
            new Item('Aged Brie', 2, 0),
            new Item('Elixir of the Mongoose', 5, 7),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
            new Item('Sulfuras, Hand of Ragnaros', -1, 80),
            new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
            new Item('Conjured Mana Cake', 3, 6)
        ]

        const expected = [
            new Item('+5 Dexterity Vest', 9, 19),
            new Item('Aged Brie', 1, 1),
            new Item('Elixir of the Mongoose', 4, 6),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
            new Item('Sulfuras, Hand of Ragnaros', -1, 80),
            new Item('Backstage passes to a TAFKAL80ETC concert', 14, 21),
            new Item('Backstage passes to a TAFKAL80ETC concert', 9, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', 4, 50),
            new Item('Conjured Mana Cake', 2, 5)
        ]

        const shop = new Shop(items)
        let result = shop.updateQuality()

        expect(result).toEqual(expected)
    })

    it('array of items after 10 days, quality never goes below zero', function() {
        const items = [
            new Item('+5 Dexterity Vest', 10, 20),
            new Item('Aged Brie', 2, 0),
            new Item('Elixir of the Mongoose', 5, 7),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
            new Item('Sulfuras, Hand of Ragnaros', -1, 80),
            new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
            new Item('Conjured Mana Cake', 3, 6)
        ]

        const expected = [
            new Item('+5 Dexterity Vest', 0, 10),
            new Item('Aged Brie', -8, 18),
            new Item('Elixir of the Mongoose', -5, 0),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
            new Item('Sulfuras, Hand of Ragnaros', -1, 80),
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 35),
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', -5, 0),
            new Item('Conjured Mana Cake', -7, 0)
        ]

        const shop = new Shop(items)
        shop.updateQuality()
        shop.updateQuality()
        shop.updateQuality()
        shop.updateQuality()
        shop.updateQuality()
        shop.updateQuality()
        shop.updateQuality()
        shop.updateQuality()
        shop.updateQuality()

        let result = shop.updateQuality()

        expect(result).toEqual(expected)
    })

    it('after sell by date quality decreases at twice the rate', function() {
        // name, sellIn, quality
        // day 10
        const items = [new Item('+5 Dexterity Vest', 0, 10)]

        // day 11
        const expected = [new Item('+5 Dexterity Vest', -1, 8)]

        const shop = new Shop(items)

        let result = shop.updateQuality()

        expect(result).toEqual(expected)
    })

    it('aged brie quality goes up by one', function() {
        // name, sellIn, quality
        // day 10
        const items = [new Item('Aged Brie', -7, 16)]

        // day 11
        const expected = [new Item('Aged Brie', -8, 18)]

        const shop = new Shop(items)

        let result = shop.updateQuality()

        expect(result).toEqual(expected)
    })

    it('aged brie quality goes up by one but not more than 50', function() {
        // name, sellIn, quality
        // day 10
        const items = [new Item('Aged Brie', -7, 49)]

        // day 11
        const expected = [new Item('Aged Brie', -8, 50)]
        const expected_2 = [new Item('Aged Brie', -9, 50)]

        const shop = new Shop(items)

        let result = shop.updateQuality()
        expect(result).toEqual(expected)
        expect(result).toEqual(expected)

        let result_2 = shop.updateQuality()

        expect(result_2).toEqual(expected_2)
    })

    it('backstage passes quality increases by 2 when 10 days or less', function() {
        // name, sellIn, quality

        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 6, 33)]

        const expected = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 35)
        ]

        const shop = new Shop(items)

        let result = shop.updateQuality()

        expect(result).toEqual(expected)
    })

    it('backstage passes quality increases by 3 when 5 days or less', function() {
        // name, sellIn, quality

        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 33)]

        const expected = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 4, 36)
        ]

        const shop = new Shop(items)

        let result = shop.updateQuality()

        expect(result).toEqual(expected)
    })

    it('quality drops to zero after concerts on sellIn = 0', function() {
        // name, sellIn, quality

        // day 10
        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50)]

        // day 11
        const expected = [
            new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0)
        ]

        const shop = new Shop(items)

        let result = shop.updateQuality()

        expect(result).toEqual(expected)
    })
})