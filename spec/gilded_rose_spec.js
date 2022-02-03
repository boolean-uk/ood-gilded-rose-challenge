var { Item, AgedBrie, NormalItem, Backstage, Sulfuras } = require('../src/items.js');
const Shop = require('../src/gilded_rose.js')
describe("Gilded Rose", function () {

  it("At the end of each day our system lowers both values for every item", function () {
    const gildedRose = new Shop([new NormalItem("+5 Dexterity Vest", 10, 20)]);
    const expected = [new NormalItem("+5 Dexterity Vest", 9, 19)]
    const items = gildedRose.updateQuality();
    expect(items).toEqual(expected);
  });

  it("At the end of each day our system lowers both values for every item", function () {
    const gildedRose3 = new Shop([new NormalItem('Elixir of the Mongoose', 1, 3)]);
    const gildedRose4 = new Shop([new NormalItem('Elixir of the Mongoose', 0, 2)]);
    const expected3 = [new NormalItem("Elixir of the Mongoose", 0, 2)]
    const expected4 = [new NormalItem("Elixir of the Mongoose", -1, 0)]
    const items3 = gildedRose3.updateQuality();
    const items4 = gildedRose4.updateQuality();
    expect(items3).toEqual(expected3)
    expect(items4).toEqual(expected4)
  });

  it("The Quality of an item is never negative", function () {
    const gildedRose = new Shop([new NormalItem('Elixir of the Mongoose', 0, 0)]);
    const expected = [new NormalItem("Elixir of the Mongoose", -1, 0)]
    const items = gildedRose.updateQuality();
    expect(items).toEqual(expected);
  });

  it("Aged Brie actually increases in Quality the older it gets", function () {
    const gildedRose = new Shop([new AgedBrie("Aged Brie", 1, 1)]);
    const gildedRose2 = new Shop([new AgedBrie("Aged Brie", 0, 2)]);
    const expected = [new AgedBrie("Aged Brie", 0, 2)]
    const expected2 = [new AgedBrie("Aged Brie", -1, 4)]
    const items = gildedRose.updateQuality();
    const items2 = gildedRose2.updateQuality();
    expect(items).toEqual(expected);
    expect(items2).toEqual(expected2);
  });

  it("The Quality of an item is never more than 50", function () {
    const gildedRose = new Shop([new Backstage("Backstage passes to a TAFKAL80ETC concert", 5, 50)]);
    const expected = [new Backstage("Backstage passes to a TAFKAL80ETC concert", 4, 50)]
    const items = gildedRose.updateQuality();
    expect(items).toEqual(expected);
  });

  it("Sulfuras, being a legendary item, never has to be sold or decreases in Quality", function () {
    const gildedRose = new Shop([new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80)]);
    const expected = [new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80)]
    const items = gildedRose.updateQuality();
    expect(items).toEqual(expected);
  });

  it("Backstage passes, like aged brie, increases in Quality as its SellIn value approaches", function () {
    const gildedRose = new Shop([new Backstage('Backstage passes to a TAFKAL80ETC concert', 11, 24)]);
    const gildedRose2 = new Shop([new Backstage('Backstage passes to a TAFKAL80ETC concert', 10, 25)]);
    const gildedRose3 = new Shop([new Backstage('Backstage passes to a TAFKAL80ETC concert', 5, 35)]);
    const gildedRose4 = new Shop([new Backstage('Backstage passes to a TAFKAL80ETC concert', 1, 50)]);
    const gildedRose5 = new Shop([new Backstage('Backstage passes to a TAFKAL80ETC concert', 0, 50)]);
    const expected = [new Backstage('Backstage passes to a TAFKAL80ETC concert', 10, 25)]
    const expected2 = [new Backstage('Backstage passes to a TAFKAL80ETC concert', 9, 27)]
    const expected3 = [new Backstage('Backstage passes to a TAFKAL80ETC concert', 4, 38)]
    const expected4 = [new Backstage('Backstage passes to a TAFKAL80ETC concert', 0, 50)]
    const expected5 = [new Backstage('Backstage passes to a TAFKAL80ETC concert', -1, 0)]
    const items = gildedRose.updateQuality();
    const items2 = gildedRose2.updateQuality();
    const items3 = gildedRose3.updateQuality();
    const items4 = gildedRose4.updateQuality();
    const items5 = gildedRose5.updateQuality();
    expect(items).toEqual(expected);
    expect(items2).toEqual(expected2);
    expect(items3).toEqual(expected3);
    expect(items4).toEqual(expected4);
    expect(items5).toEqual(expected5);
  });

  it("Conjured items degrade in Quality twice as fast as normal items", function () {
    const gildedRose = new Shop([new NormalItem('Conjured Mana Cake', 0, 3)]);
    const gildedRose2 = new Shop([new NormalItem('Conjured Mana Cake', -1, 1)]);
    const expected = [new NormalItem('Conjured Mana Cake', -1, 1)]
    const expected2 = [new NormalItem('Conjured Mana Cake', -2, 0)]
    const items = gildedRose.updateQuality();
    const items2 = gildedRose2.updateQuality();
    expect(items).toEqual(expected);
    expect(items2).toEqual(expected2);
  });
});
