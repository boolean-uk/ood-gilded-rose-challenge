var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should return the name of the item", function() {
    const gildedRose = new Shop([ new Item('Aged Brie', 2, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual('Aged Brie');
  });
  it("Aged Brie actually increases in Quality by 1 the older it gets", function() {
    //set up
    const gildedRose = new Shop([ new Item('Aged Brie', 2, 0) ]);
   gildedRose.updateQuality();
   gildedRose.updateQuality();
    const result = new Item('Aged Brie', 0, 2) 
    // verify
    expect(gildedRose.items[0]).toEqual(result)
  });
  it("Once the sell by date has passed, Quality degrades twice as fast", function() {
    //set up
   
     const items = [
    new Item("+5 Dexterity Vest", 0, 10),
    new Item("Aged Brie", 0, 2),
    new Item("Elixir of the Mongoose", 2, 6),
    ]
    const gildedRose = new Shop(items);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
 
   //verify
    const result =  [
      new Item("+5 Dexterity Vest", -3, 4),
      new Item("Aged Brie", -3, 8),
      new Item("Elixir of the Mongoose", -1, 2),
    ]
    
    expect(items).toEqual(result);
  });

  
  it("shows the expected outcome with 2 days (without conjured item)", function() {
    let items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    
      // This Conjured item does not work properly yet
      // new Item("Conjured Mana Cake", 3, 6)
  
    ];
   
    const gildedRose = new Shop(items);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
 
    const result =  [
      new Item("+5 Dexterity Vest", 8, 18),
      new Item("Aged Brie", 0, 2),
      new Item("Elixir of the Mongoose", 3, 5),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 13, 22),
      new Item("Backstage passes to a TAFKAL80ETC concert", 8, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 50),
    ]

    expect(items).toEqual(result);
    
  });

  it("The Quality of an item is never negative", function() {
    //set up
   
    const days = 5;

     const items = [
    new Item("+5 Dexterity Vest", 5, 1),
    new Item("Aged Brie", 2, 2),
    new Item("Elixir of the Mongoose", 5, 1),
    new Item("Backstage passes to a TAFKAL80ETC concert", 3, 50),
    ]
    const gildedRose = new Shop(items);
    
    for (let day = 0; day < days; day++) {
      console.log(`\n-------- day ${day} --------`);
      console.log("name, sellIn, quality");
      items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
      gildedRose.updateQuality();
    }
   //verify
    const result =  [
      new Item("+5 Dexterity Vest", 0, 0),
      new Item("Aged Brie", -3, 10),
      new Item("Elixir of the Mongoose", 0, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", -2, 0),
    ]
    
    expect(items).toEqual(result);
  });
  it("The Quality of an item is never more than 50", function() {
    //set up
   
    const days = 5;

     const items = [
    new Item("Aged Brie", 2, 48),
    new Item("Backstage passes to a TAFKAL80ETC concert", 3, 50),
    ]
    const gildedRose = new Shop(items);
    
    for (let day = 0; day < days; day++) {
      console.log(`\n-------- day ${day} --------`);
      console.log("name, sellIn, quality");
      items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
      gildedRose.updateQuality();
    }
   //verify
    const result =  [
      new Item("Aged Brie", -3, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", -2, 0),
    ]
    
    expect(items).toEqual(result);
  });
  it("Sulfuras, being a legendary item, never has to be sold or decreases in Quality", function() {
    //set up
   
    const days = 100;

     const items = [
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    ]
    const gildedRose = new Shop(items);
    
    for (let day = 0; day < days; day++) {
      // console.log(`\n-------- day ${day} --------`);
      // console.log("name, sellIn, quality");
      items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
      gildedRose.updateQuality();
    }
   //verify
    const result =  [
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    ]
    
    expect(items).toEqual(result);
  });

});

describe("Backstage Passes",function() {
  it("Quality increases by 2 when there are 10 days or less", function() {
    //set up
   
    const days = 4;

     const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 12, 8),
    ]
    const gildedRose = new Shop(items);
    
    for (let day = 0; day < days; day++) {
      console.log(`\n-------- day ${day} --------`);
      console.log("name, sellIn, quality");
      items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
      gildedRose.updateQuality();
    }
   //verify
    const result =  [
      new Item("Backstage passes to a TAFKAL80ETC concert", 8, 14),
    ]
    
    expect(items).toEqual(result);
  });
  it("Quality increases by 3 when there are 5 days or less", function() {
    //set up
   
    const days = 4;

     const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 8, 8),
    ]
    const gildedRose = new Shop(items);
    
    for (let day = 0; day < days; day++) {
      console.log(`\n-------- day ${day} --------`);
      console.log("name, sellIn, quality");
      items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
      gildedRose.updateQuality();
    }
   //verify
    const result =  [
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 17),
    ]
    
    expect(items).toEqual(result);
  });
  it("Quality drops 0 after the concert", function() {
    //set up
   
    const days = 4;

     const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 40),
    ]
    const gildedRose = new Shop(items);
    
    for (let day = 0; day < days; day++) {
      console.log(`\n-------- day ${day} --------`);
      console.log("name, sellIn, quality");
      items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
      gildedRose.updateQuality();
    }
   //verify
    const result =  [
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0),
    ]
    
    expect(items).toEqual(result);
  });

}) 