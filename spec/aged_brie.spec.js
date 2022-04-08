var {Shop, Item} = require('../src/gilded_rose.js');

describe("aged brie", function() {

    //TEST1
  it("increases in quality the older it gets", function() {
    //setup
    //---------------------------PARAMETERS:  name, sellin,quality///
    const gildedRose = new Shop([ new Item("Aged Brie", 5, 10) ]);
    //execute
    const items = gildedRose.updateQuality();
    //verify
    console.log("IN TEST - ITEMS: ", items)
    expect(items[0].name).toEqual("Aged Brie");
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(11);
  });

  //TEST2
  it("quality never goes above 50", function() {
    //setup
    //---------------------------PARAMETERS:  name, sellin,quality///
    const gildedRose = new Shop([ new Item("Aged Brie", 5, 50) ]);
    //execute
    const items = gildedRose.updateQuality();
    //verify
    console.log("IN TEST - ITEMS: ", items)
    expect(items[0].name).toEqual("Aged Brie");
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(50);
  });

  //TODO: possible test to add: return error message when I input a quality higher then 50.

  });