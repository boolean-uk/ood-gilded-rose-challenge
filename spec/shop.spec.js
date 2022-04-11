const Shop = require('../src/shop.js');
const Item = require('../src/item.js');


describe("Gilded Rose", function() {

  it("it should not have a quality less than zero", function() {
    const gildedRose = new Shop([ new Item("Item1", 0, 0) ]);
    // (name, sellIn, quality) - 0, 0 is sellIn then quality
    const items = gildedRose.updateQuality(); // one day has past we update all item qualities
    expect(items[0].name).toEqual("Item1");
    expect(items[0].quality).toEqual(0);
  });

    it("it should not have a quality never more than 50", function() {
    const gildedRose = new Shop([ new Item("Item1", 0, 51) ]);
    // (name, sellIn, quality) - 0, 0 is sellIn then quality
    const items = gildedRose.updateQuality(); // one day has past we update all item qualities
    expect(items[0].name).toEqual("Item1");
    expect(items[0].quality).toEqual(49);
  });


  it("it should lose quality twice as fast if expired", function() {
    const gildedRose = new Shop([ new Item("Item1", 0, 4) ]);
    // (name, sellIn, quality) - 0, 0 is sellIn then quality
    const items = gildedRose.updateQuality(); // one day has past we update all item qualities
    expect(items[0].name).toEqual("Item1");
    expect(items[0].quality).toEqual(2);
  });

   it("it should lose quality each day", function() {
    const gildedRose = new Shop([ new Item("Item1", 1, 2) ]);
    // (name, sellIn, quality) - 0, 0 is sellIn then quality
    const items = gildedRose.updateQuality(); // one day has past we update all item qualities
    expect(items[0].name).toEqual("Item1");
    expect(items[0].quality).toEqual(1);
  });

  it("Day 1: should update all items", function() {
    const startingItems = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),

  new Item("Conjured Mana Cake", 3, 6), ];

  const gildedRose = new Shop(startingItems)
  const items = gildedRose.updateQuality();

  // +5 Dexterity Vest
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(19);
     // Aged Brie
    expect(items[1].sellIn).toEqual(1);
    expect(items[1].quality).toEqual(1);
     // Elixir of the Mongoose
    expect(items[2].sellIn).toEqual(4);
    expect(items[2].quality).toEqual(6);
     // Sulfuras, Hand of Ragnaros
    expect(items[3].sellIn).toEqual(0);
    expect(items[3].quality).toEqual(80);
    //  Sulfuras, Hand of Ragnaros
    expect(items[4].sellIn).toEqual(-1);
    expect(items[4].quality).toEqual(80);
    //  Backstage passes to a TAFKAL80ETC concert
    expect(items[5].sellIn).toEqual(14);
    expect(items[5].quality).toEqual(21);
    //  Backstage passes to a TAFKAL80ETC concert
    expect(items[6].sellIn).toEqual(9);
    expect(items[6].quality).toEqual(50);
     //  Backstage passes to a TAFKAL80ETC concert
    expect(items[7].sellIn).toEqual(4);
    expect(items[7].quality).toEqual(50);
    //  Conjured Mana Cake
    expect(items[8].sellIn).toEqual(2);
    expect(items[8].quality).toEqual(5);
  });

  it("Day 30: should update all items", function() {
    const startingItems = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),

  new Item("Conjured Mana Cake", 3, 6), ];

  const gildedRose = new Shop(startingItems)
  for (let i=0; i<29; i++) {
  gildedRose.updateQuality();
  }
  const items = gildedRose.updateQuality();

  // +5 Dexterity Vest
    expect(items[0].sellIn).toEqual(-20);
    expect(items[0].quality).toEqual(0);
     // Aged Brie
    expect(items[1].sellIn).toEqual(-28);
    expect(items[1].quality).toEqual(50);
     // Elixir of the Mongoose
    expect(items[2].sellIn).toEqual(-25);
    expect(items[2].quality).toEqual(0);
     // Sulfuras, Hand of Ragnaros
    expect(items[3].sellIn).toEqual(0);
    expect(items[3].quality).toEqual(80);
    //  Sulfuras, Hand of Ragnaros
    expect(items[4].sellIn).toEqual(-1);
    expect(items[4].quality).toEqual(80);
    //  Backstage passes to a TAFKAL80ETC concert
    expect(items[5].sellIn).toEqual(-15);
    expect(items[5].quality).toEqual(0);
    //  Backstage passes to a TAFKAL80ETC concert
    expect(items[6].sellIn).toEqual(-20);
    expect(items[6].quality).toEqual(0);
     //  Backstage passes to a TAFKAL80ETC concert
    expect(items[7].sellIn).toEqual(-25);
    expect(items[7].quality).toEqual(0);
    //  Conjured Mana Cake
    expect(items[8].sellIn).toEqual(-27);
    expect(items[8].quality).toEqual(0);
  });

});
