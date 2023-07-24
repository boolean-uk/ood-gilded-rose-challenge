var {Shop, Item} = require('../src/gilded_rose.js');
describe("updateQuality", function() {

  it("should decrease standard item quality and sellIn by 1", function() {
    const gildedRose = new Shop([ new Item("foo", 10, 10) ]);
    const items = gildedRose.updateQualityOfItems();
    expect(items[0]).toEqual(new Item("foo", 9, 9));
  });

  it("should decrease standard item quality by 2 and sellIn by 1 after sellByDate", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 10) ]);
    const items = gildedRose.updateQualityOfItems();
    expect(items[0]).toEqual(new Item("foo", -1, 8));
  });

  it("should not decrease item quality beyond 0", function() {
    const gildedRose = new Shop([ new Item("foo", 10, 1) ]);
    gildedRose.updateQualityOfItems();
    const items = gildedRose.updateQualityOfItems();
    expect(items[0]).toEqual(new Item("foo", 8, 0));
  });

  it("should increase Aged Brie quality", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 10, 10) ]);
    const items = gildedRose.updateQualityOfItems();
    expect(items[0]).toEqual(new Item("Aged Brie", 9, 11));
  });
  
  it("should not increase item quality beyond 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 10, 49) ]);
    gildedRose.updateQualityOfItems();
    const items = gildedRose.updateQualityOfItems();
    expect(items[0]).toEqual(new Item("Aged Brie", 8, 50));
  });

  it("should not modify Sulfuras item", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
    const items = gildedRose.updateQualityOfItems();
    expect(items[0]).toEqual(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
  });

  it("should increase Backstage passes quality properly for 6 or more days", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 10) ]);

    let items = gildedRose.updateQualityOfItems();
    expect(items[0]).toEqual(new Item("Backstage passes to a TAFKAL80ETC concert", 10, 11));

    items = gildedRose.updateQualityOfItems();
    expect(items[0]).toEqual(new Item("Backstage passes to a TAFKAL80ETC concert", 9, 13));
  });

  it("should increase Backstage passes quality properly for 5 days", function() {
    let gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10) ]);

    items = gildedRose.updateQualityOfItems();
    expect(items[0]).toEqual(new Item("Backstage passes to a TAFKAL80ETC concert", 4, 13));
  });

  it("should drop Backstage passes quality properly to 0 after the concert", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 1, 10) ]);

    let items = gildedRose.updateQualityOfItems();
    expect(items[0]).toEqual(new Item("Backstage passes to a TAFKAL80ETC concert", 0, 13));

    items = gildedRose.updateQualityOfItems();
    expect(items[0]).toEqual(new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0));
  });


});
