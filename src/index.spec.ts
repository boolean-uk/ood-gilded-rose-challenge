import { Shop } from './index';
import { Legendary } from './legendary';
import { Backstage_pass } from './backstage_pass';
import { Normal_Item } from './normal_item';  
import { Connjured } from './conjured';

describe("Gilded Rose test", function() {
  
  it("should not change legendary items quality and sellIn", function() {
    const legedaryItem = new Legendary("Sulfuras, Hand of Ragnaros", 0, 80);
    const expectedQuality = legedaryItem.quality;
    const expectedSellIn = legedaryItem.sellIn;

    const shop = new Shop([legedaryItem]);
    shop.updateQuality();

    expect(legedaryItem.quality).toEqual(expectedQuality);
    expect(legedaryItem.sellIn).toEqual(expectedSellIn);
  });

  it("should backstage pass quality increase by 1 and sellIn -1 when sellIn is above 10", function() {
    const backstagePass = new Backstage_pass("TAFKAL80ETC concert", 15, 20);
    const expectedQuality = backstagePass.quality + 1;
    const expectedSellIn = backstagePass.sellIn - 1;
    
    const shop = new Shop([backstagePass]);
    shop.updateQuality();
    expect(backstagePass.quality).toEqual(expectedQuality);
    expect(backstagePass.sellIn).toEqual(expectedSellIn); 
  });
  
  it("should backstage pass quality increase by 2 and sellIn -1 when sellIn is between 5 and 10", function() {
    const backstagePass = new Backstage_pass("TAFKAL80ETC concert", 10, 20);
    const expectedQuality = backstagePass.quality + 2;
    const expectedSellIn = backstagePass.sellIn - 1;

    const shop = new Shop([backstagePass]);
    shop.updateQuality();
    expect(backstagePass.quality).toEqual(expectedQuality);
    expect(backstagePass.sellIn).toEqual(expectedSellIn);
  });

  it("should backstage pass quality increase by 3 and sellIn -1 when sellIn is between 0 and 5", function() {
    const backstagePass = new Backstage_pass("TAFKAL80ETC concert", 5, 20);
    const expectedQuality = backstagePass.quality + 3;
    const expectedSellIn = backstagePass.sellIn - 1;

    const shop = new Shop([backstagePass]);
    shop.updateQuality();
    expect(backstagePass.quality).toEqual(expectedQuality);
    expect(backstagePass.sellIn).toEqual(expectedSellIn);
  }); 

  it("should not quality increase above 50", function() {
    const backstagePass = new Backstage_pass("TAFKAL80ETC concert", 5, 48);
    const expectedQuality = 50;
    
    const shop = new Shop([backstagePass]);
    shop.updateQuality();
    expect(backstagePass.quality).toEqual(expectedQuality);
  });

  it("should backstage pass quality drop to 0 when sellIn is lower than 0", function() {
    const backstagePass = new Backstage_pass("TAFKAL80ETC concert", 0, 20);
    const expectedQuality = 0;

    const shop = new Shop([backstagePass]);
    shop.updateQuality();
    expect(backstagePass.quality).toEqual(expectedQuality);
  });

  it("should conjured quality increase by 4 and sellIn -1 when sellIn is below 0", function(){
    const conjuredItem = new Connjured("Conjured Mana Cake", 0,20);
    const expectedQuality = conjuredItem.quality + 4;
    const expectedSellIn = conjuredItem.sellIn -1;

    const shop = new Shop([conjuredItem]);
    shop.updateQuality()
    expect(conjuredItem.quality).toEqual(expectedQuality)
    expect(conjuredItem.sellIn).toEqual(expectedSellIn)
  });

  it("should conjured quality increase by 2 and sellIn -1 when sellIn is above 0", function(){
    const conjuredItem = new Connjured("Conjured Mana Cake", 20,20);
    const expectedQuality = conjuredItem.quality + 2;
    const expectedSellIn = conjuredItem.sellIn -1;

    const shop = new Shop([conjuredItem]);
    shop.updateQuality()
    expect(conjuredItem.quality).toEqual(expectedQuality)
    expect(conjuredItem.sellIn).toEqual(expectedSellIn)
  });

  it("shouls normal item quality increase by 2 when sellIn is below 0", function(){
    const normalItem = new Normal_Item("Aged Brie", 0 , 40);
    const expectedQuality = normalItem.quality + 2;
    const expectedSellIn = normalItem.sellIn - 1;

    const shop = new Shop([normalItem])
    shop.updateQuality()
    expect(normalItem.quality).toEqual(expectedQuality)
    expect(normalItem.sellIn).toEqual(expectedSellIn)
  })

  it("shouls normal item quality increase by 1 when sellIn is above 0", function(){
    const normalItem = new Normal_Item("Aged Brie", 10 , 40);
    const expectedQuality = normalItem.quality + 1;
    const expectedSellIn = normalItem.sellIn - 1;

    const shop = new Shop([normalItem])
    shop.updateQuality()
    expect(normalItem.quality).toEqual(expectedQuality)
    expect(normalItem.sellIn).toEqual(expectedSellIn)
  })

  

});