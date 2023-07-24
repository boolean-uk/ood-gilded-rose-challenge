import { RegularItem, LegendaryItem, AgedItem, ConcertItem, ConjuredItem } from '../src/Item'

import { Shop } from '../src/gilded_rose_modified'


describe('Gilded Rose', () => {
  let shop: Shop

  beforeEach(() => {
    const items = [
      new RegularItem('+5 Dexterity Vest', 10, 20),
      new AgedItem('Aged Brie', 2, 0),
      new RegularItem('Elixir of the Mongoose', 5, 7),
      new LegendaryItem('Sulfuras, Hand of Ragnaros', 0, 80),
      new LegendaryItem('Sulfuras, Hand of Ragnaros', -1, 80),
      new ConcertItem('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new ConcertItem('Backstage passes to a TAFKAL80ETC concert', 10, 49),
      new ConcertItem('Backstage passes to a TAFKAL80ETC concert', 5, 49),
      new ConjuredItem('Conjured Mana Cake', 3, 6)
    ]

    shop = new Shop(items)
  })

  it('should ', () => {
    for (let i = 0; i < 1; i++) {
      shop.updateQuality()
    }

    expect(shop.getItems()[0].getName()).toEqual('+5 Dexterity Vest')
    expect(shop.getItems()[0].getSellIn()).toEqual(9)
    expect(shop.getItems()[0].getQuality()).toEqual(19)
  })
})
