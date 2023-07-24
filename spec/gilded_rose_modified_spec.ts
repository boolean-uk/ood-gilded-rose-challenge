import { RegularItem, LegendaryItem, AgedItem, ConcertItem, ConjuredItem } from '../src/Item'

import { Shop } from '../src/gilded_rose_modified'


describe('Gilded Rose', () => {

  it('should update properly regular items', () => {
    const items = [
      new RegularItem('+5 Dexterity Vest', 10, 20),
      new RegularItem('+5 Dexterity Vest', 4, 0),
      new RegularItem('+5 Dexterity Vest', -4, 0)
    ]

    let shop = new Shop(items)
    shop.updateQuality()
    
    expect(shop.getItems()[0].getSellIn()).toEqual(9)
    expect(shop.getItems()[0].getQuality()).toEqual(19)

    expect(shop.getItems()[1].getSellIn()).toEqual(3)
    expect(shop.getItems()[1].getQuality()).toEqual(0)

    expect(shop.getItems()[2].getSellIn()).toEqual(-5)
    expect(shop.getItems()[2].getQuality()).toEqual(0)
  })

  it('should update properly legendary items', () => {
    const items = [
      new LegendaryItem('Sulfuras, Hand of Ragnaros', -1, 80)
    ]

    let shop = new Shop(items)
    shop.updateQuality()
    
    expect(shop.getItems()[0].getSellIn()).toEqual(-1)
    expect(shop.getItems()[0].getQuality()).toEqual(80)
  })

  it('should update properly aged items', () => {
    const items = [
      new AgedItem('Aged Brie', 2, 0),
      new AgedItem('Aged Brie', 0, 4),
      new AgedItem('Aged Brie', -4, 7),
      new AgedItem('Aged Brie', 2, 50),
      new AgedItem('Aged Brie', -4, 49)
    ]

    let shop = new Shop(items)
    shop.updateQuality()
    
    expect(shop.getItems()[0].getSellIn()).toEqual(1)
    expect(shop.getItems()[0].getQuality()).toEqual(1)

    expect(shop.getItems()[1].getSellIn()).toEqual(-1)
    expect(shop.getItems()[1].getQuality()).toEqual(6)

    expect(shop.getItems()[2].getSellIn()).toEqual(-5)
    expect(shop.getItems()[2].getQuality()).toEqual(9)

    expect(shop.getItems()[3].getSellIn()).toEqual(1)
    expect(shop.getItems()[3].getQuality()).toEqual(50)

    expect(shop.getItems()[4].getSellIn()).toEqual(-5)
    expect(shop.getItems()[4].getQuality()).toEqual(50)
  })

  it('should update properly concert items', () => {
    const items = [
      new ConcertItem('Backstage passes to a TAFKAL80ETC concert', 15, 33),
      new ConcertItem('Backstage passes to a TAFKAL80ETC concert', 10, 23),
      new ConcertItem('Backstage passes to a TAFKAL80ETC concert', 3, 12),
      new ConcertItem('Backstage passes to a TAFKAL80ETC concert', 22, 49),
      new ConcertItem('Backstage passes to a TAFKAL80ETC concert', 9, 49),
      new ConcertItem('Backstage passes to a TAFKAL80ETC concert', 4, 49),
      new ConcertItem('Backstage passes to a TAFKAL80ETC concert', 0, 12)
    ]

    let shop = new Shop(items)
    shop.updateQuality()
    
    expect(shop.getItems()[0].getSellIn()).toEqual(14)
    expect(shop.getItems()[0].getQuality()).toEqual(34)

    expect(shop.getItems()[1].getSellIn()).toEqual(9)
    expect(shop.getItems()[1].getQuality()).toEqual(25)

    expect(shop.getItems()[2].getSellIn()).toEqual(2)
    expect(shop.getItems()[2].getQuality()).toEqual(15)

    expect(shop.getItems()[3].getSellIn()).toEqual(21)
    expect(shop.getItems()[3].getQuality()).toEqual(50)

    expect(shop.getItems()[4].getSellIn()).toEqual(8)
    expect(shop.getItems()[4].getQuality()).toEqual(50)

    expect(shop.getItems()[5].getSellIn()).toEqual(3)
    expect(shop.getItems()[5].getQuality()).toEqual(50)

    expect(shop.getItems()[6].getSellIn()).toEqual(-1)
    expect(shop.getItems()[6].getQuality()).toEqual(0)
  })

  it('should update properly conjured items', () => {
    const items = [
      new ConjuredItem('Conjured Mana Cake', 2, 0),
      new ConjuredItem('Conjured Mana Cake', 0, 4),
      new ConjuredItem('Conjured Mana Cake', -4, 1),
      new ConjuredItem('Conjured Mana Cake', 2, 50),
      new ConjuredItem('Conjured Mana Cake', -4, 49)
    ]

    let shop = new Shop(items)
    shop.updateQuality()
    
    expect(shop.getItems()[0].getSellIn()).toEqual(1)
    expect(shop.getItems()[0].getQuality()).toEqual(0)

    expect(shop.getItems()[1].getSellIn()).toEqual(-1)
    expect(shop.getItems()[1].getQuality()).toEqual(2)

    expect(shop.getItems()[2].getSellIn()).toEqual(-5)
    expect(shop.getItems()[2].getQuality()).toEqual(0)

    expect(shop.getItems()[3].getSellIn()).toEqual(1)
    expect(shop.getItems()[3].getQuality()).toEqual(49)

    expect(shop.getItems()[4].getSellIn()).toEqual(-5)
    expect(shop.getItems()[4].getQuality()).toEqual(47)
  })
})
