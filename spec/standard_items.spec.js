var {Shop, Item} = require('../src/gilded_rose.js');

describe("standard items", function() {

  //TODO: i also want to make a test and function for checking the input item names, you cannot enter random stuff, it must be the items sold in the shop.

  //TEST1
  it("sell-in and quality decreased by 1", function() {
    //setup
    //---------------------------PARAMETERS:  name, sellin,quality///
    const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 5, 10) ]);
    //execute
    const items = gildedRose.updateQuality();
    //verify
    console.log("IN TEST - ITEMS: ", items)
    expect(items[0].name).toEqual("+5 Dexterity Vest");
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(9);
  });

  //TEST2
  it("quality decreased twice as fast", function() {
    //setup
    //---------------------------PARAMETERS:  name, sellin,quality///
    const gildedRose = new Shop([ new Item("+5 Dexterity Vest", -1, 10) ]);
    //execute
    const items = gildedRose.updateQuality();
    //verify
    console.log("IN TEST - ITEMS: ", items)
    expect(items[0].name).toEqual("+5 Dexterity Vest");
    expect(items[0].sellIn).toEqual(-2);
    expect(items[0].quality).toEqual(8);
  });

  //TEST3
  it("quality never goes below 0", function() {
    //setup
    //---------------------------PARAMETERS:  name, sellin,quality///
    const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 5, 0) ]);
    //execute
    const items = gildedRose.updateQuality();
    //verify
    console.log("IN TEST - ITEMS: ", items)
    expect(items[0].name).toEqual("+5 Dexterity Vest");
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(0);
  });
 
  //TODO: possible test to add: return error message when I input a quality lower then 0.

});


