const Shop = require('../src/gilded_rose.js');
const Item = require('../src/Item.js')
const AgedBrie = require('../src/AgedBrie')
const BackstagePass = require('../src/BackstagePass')
const Conjured = require('../src/Conjured')
const NormalItems = require('../src/NormalItems')
const Sulfuras = require('../src/Sulfuras')

console.log(NormalItems);

describe("Gilded Rose", function() {
let items;
let gildedRose;
 beforeEach(() => {
     items = [
        new NormalItems("+5 Dexterity Vest", 10, 20),
        new AgedBrie("Aged Brie", 2, 0),
        new NormalItems("Elixir of the Mongoose", 5, 7),
        new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
        new Sulfuras("Sulfuras, Hand of Ragnaros", -1, 80),
        new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20),
        new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 49),
        new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 5, 49),
        new Conjured("Conjured Mana Cake", 3, 6)
      ];
      gildedRose = new Shop(items);
   });

  it("should return the name of the item", function() {
     gildedRose.updateQuality();
    expect(items[1].name).toEqual('Aged Brie');
  });
  it("Aged Brie actually increases in Quality by 1 the older it gets", function() {
    //set up
   gildedRose.updateQuality();
   gildedRose.updateQuality();

    // verify
    expect(gildedRose.items[1].quality).toEqual(2)
    expect(gildedRose.items[1].sellIn).toEqual(0)
  });
  it("Aged Brie actually increases in Quality by 2 after 0 sell in date", function() {
    //set up
   gildedRose.updateQuality();
   gildedRose.updateQuality();
   gildedRose.updateQuality();

    // verify
    expect(gildedRose.items[1].quality).toEqual(4)
    expect(gildedRose.items[1].sellIn).toEqual(-1)
  });
  it("Once the sell by date has passed, Quality degrades twice as fast", function() {
    //set up
    for(let i = 0; i <= 11;i++) gildedRose.updateQuality();
    //verify
    expect(items[0].sellIn).toEqual(-2);
    expect(items[0].quality).toEqual(6);
    expect(items[1].sellIn).toEqual(-10);
    expect(items[1].quality).toEqual(22);
    expect(items[8].sellIn).toEqual(-9);
    expect(items[8].quality).toEqual(0);
  });

  
  it("shows the expected outcome with 2 days (without conjured item)", function() {
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(8);
    expect(items[0].quality).toEqual(18);
    expect(items[1].sellIn).toEqual(0);
    expect(items[1].quality).toEqual(2);
    expect(items[2].sellIn).toEqual(3);
    expect(items[2].quality).toEqual(5);
    expect(items[3].sellIn).toEqual(0);
    expect(items[3].quality).toEqual(80);
    expect(items[4].sellIn).toEqual(-1);
    expect(items[4].quality).toEqual(80);
    expect(items[5].sellIn).toEqual(13);
    expect(items[5].quality).toEqual(22);
    expect(items[6].sellIn).toEqual(8);
    expect(items[6].quality).toEqual(50);
    expect(items[7].sellIn).toEqual(3);
    expect(items[7].quality).toEqual(50);
    expect(items[8].sellIn).toEqual(1);
    expect(items[8].quality).toEqual(2);
    
  });

  it("The Quality of an item is never negative", function() {
    //set up
   
    for(let i = 0; i <= 19;i++) gildedRose.updateQuality();

   //verify
    expect(items[0].sellIn).toEqual(-10);
    expect(items[0].quality).toEqual(0);
    expect(items[8].sellIn).toEqual(-17);
    expect(items[8].quality).toEqual(0);
  });
  it("The Quality of an item is never more than 50", function() {
    //set up
   
    for(let i = 0; i <= 26;i++) gildedRose.updateQuality();

  //verify
    expect(items[1].sellIn).toEqual(-25);
    expect(items[1].quality).toEqual(50);
    expect(items[7].sellIn).toEqual(-22);
    expect(items[7].quality).toEqual(0);
  });
  it("Sulfuras, being a legendary item, never has to be sold or decreases in Quality", function() {
    //set up
    for(let i = 0; i <= 26;i++) gildedRose.updateQuality();
   //verify
    expect(items[3].sellIn).toEqual(0);
    expect(items[3].quality).toEqual(80);
  });

});

describe("Backstage Passes",function() {
let items;
let gildedRose;
 beforeEach(() => {
     items = [new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20)];
      gildedRose = new Shop(items);
   });

  it("Quality increases by 2 when there are 10 days or less", function() {
    //set up
    for(let i = 0; i <= 5;i++) gildedRose.updateQuality();
   //verify
   
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(27);
  });
  it("Quality increases by 3 when there are 5 days or less", function() {
    //set up
    for(let i = 0; i <= 10;i++) gildedRose.updateQuality();
   //verify

   expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(38);
  });
  it("Quality drops 0 after the concert", function() {
    //set up
      for(let i = 0; i <= 15;i++) gildedRose.updateQuality();
      //verify
   
      expect(items[0].sellIn).toEqual(-1);
       expect(items[0].quality).toEqual(0);
  });

}) 