var {Shop, Item} = require('../src/gilded_rose.js');

describe("backstage passes", function() {

    //TEST1
  it("quality increses by 1 - when sell-in is > 10 days", function() {
    //setup
    //---------------------------PARAMETERS:  name, sellin,quality///
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10) ]);
    //execute
    const items = gildedRose.updateQuality();
    //verify
    console.log("IN TEST - ITEMS: ", items)
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toEqual(14);
    expect(items[0].quality).toEqual(11);
  });

  //TEST2
  it("quality increses by 2 - when sell-in is between 10-6 days", function() {
    //setup
    //---------------------------PARAMETERS:  name, sellin,quality///
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10) ]);
    //execute
    const items = gildedRose.updateQuality();
    //verify
    console.log("IN TEST - ITEMS: ", items)
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(12);
  });

  //TEST3
  it("quality increses by 3 - when sell-in is < 5 days", function() {
    //setup
    //---------------------------PARAMETERS:  name, sellin,quality///
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 4, 10) ]);
    //execute
    const items = gildedRose.updateQuality();
    //verify
    console.log("IN TEST - ITEMS: ", items)
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toEqual(3);
    expect(items[0].quality).toEqual(13);
  });

  //TEST4
  it("quality drops to 0 when sell-in is < 0", function() {
    //setup
    //---------------------------PARAMETERS:  name, sellin,quality///
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 32) ]);
    //execute
    const items = gildedRose.updateQuality();
    //verify
    console.log("IN TEST - ITEMS: ", items)
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });

});
