const {Shop, Item} = require('../src/gilded_rose_extract_methods_only.js');

describe("Gilded Rose", function() {


  it("check item decreases quality by one why one day has passed", function() {
    const gildedRose = new Shop([ new Item("food", 1, 2) ]);
    gildedRose.updateQuality();
    const test = gildedRose.items[0].quality
    expect(test).toEqual(1);
  });

  it("Once the sell by date has passed, Quality degrades twice as fast", function() {
    const gildedRose = new Shop([ new Item("food", 1, 8) ]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const test = gildedRose.items[0].quality
    expect(test).toEqual(5);
  });

  it("The Quality of an item is never negative", function() {
    const gildedRose = new Shop([ new Item("food", 1, 1) ]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const test = gildedRose.items[0].quality
    expect(test).toEqual(0);
  });

  it("The Quality of an item is never negative - even when quality decreasing by two", function() {
    const gildedRose = new Shop([ new Item("food", 1, 4) ]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const test = gildedRose.items[0].quality
    expect(test).toEqual(0);
  });

  it("Aged Brie actually increases in Quality the older it gets", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 1, 1) ]);
    gildedRose.updateQuality();
    const test = gildedRose.items[0].quality
    expect(test).toEqual(2);
  });

  it("Aged Brie  increases in Quality the older it gets", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 1, 1) ]);
    gildedRose.updateQuality();
    const test = gildedRose.items[0].quality
    expect(test).toEqual(2);
  });

  it("Aged Brie increases by two after sellIn date", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 1, 1) ]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const test = gildedRose.items[0].quality
    expect(test).toEqual(4);
  });

it("The Quality of an item is never more than 50", function() {
  const gildedRose = new Shop([ new Item("Aged Brie", -1, 49) ]);
  gildedRose.updateQuality();
  gildedRose.updateQuality();
  const test = gildedRose.items[0].quality
  expect(test).toEqual(50);
});

it("Sulfuras, sell in remains same", function() {
  const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 10, 80) ]);
  gildedRose.updateQuality();
  gildedRose.updateQuality();
  const test = gildedRose.items[0].sellIn
  expect(test).toEqual(10);
});

it("Sulfuras, quality remains same", function() {
  const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', -1, 80) ]);
  gildedRose.updateQuality();
  gildedRose.updateQuality();
  const test = gildedRose.items[0].quality
  expect(test).toEqual(80);
});


it("Backstage passes increase", function() {
  const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 20, 12) ]);
  gildedRose.updateQuality();
  const test = gildedRose.items[0].quality
  expect(test).toEqual(13);
});

it("Backstage passes increase quality by 2, 10 days before", function() {
  const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30) ]);
  gildedRose.updateQuality();
  gildedRose.updateQuality();
  const test = gildedRose.items[0].quality
  expect(test).toEqual(34);
});

it("Backstage passes increase quality by 3, 5 days before", function() {
  const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 6, 40) ]);
  gildedRose.updateQuality();
  gildedRose.updateQuality();
  const test = gildedRose.items[0].quality
  expect(test).toEqual(45);
});

it("Backstage passes increase quality is zero when past sell in", function() {
  const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 1, 45) ]);
  gildedRose.updateQuality();
  gildedRose.updateQuality();
  const test = gildedRose.items[0].quality
  expect(test).toEqual(0);
});

it("Conjured degrade twice as fast - before sell in", function() {
  const gildedRose = new Shop([ new Item("Conjured Mana Cake", 1, 20) ]);
  gildedRose.updateQuality();
  const test = gildedRose.items[0].quality
  expect(test).toEqual(18);
});

it("Conjured degrade twice as fast - after sell in", function() {
  const gildedRose = new Shop([ new Item("Conjured Mana Cake", -1, 45) ]);
  gildedRose.updateQuality();
  const test = gildedRose.items[0].quality
  expect(test).toEqual(41);
});

});
