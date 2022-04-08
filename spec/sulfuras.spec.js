var {Shop, Item} = require('../src/gilded_rose.js');

describe("sulfuras", function() {

    //TEST1
  it("increases in quality the older it gets", function() {
    //setup
    //---------------------------PARAMETERS:  name, sellin,quality///
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
    //execute
    const items = gildedRose.updateQuality();
    //verify
    console.log("IN TEST - ITEMS: ", items)
    expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toEqual(0);
    expect(items[0].quality).toEqual(80);
  });

});