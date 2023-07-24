class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    
   }
}

class StandardItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    this.sellIn <= 0 ? this.quality -= 2 : this.quality--;
    this.sellIn--;
    if (this.quality < 0) {
      this.quality = 0;
    } 
  }
} 

class AgedBrieItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    this.quality++;
    this.sellIn--;
    if (this.quality > 50) {
      this.quality = 50;
    } 
  }
} 

class SulfurasItem extends Item {
  constructor(sellIn) {
    super("Sulfuras, Hand of Ragnaros", sellIn, 80);
  }

  updateQuality() {
  }
} 

class BackstagePassesItem extends Item {
  constructor(sellIn, quality) {
    super("Backstage passes to a TAFKAL80ETC concert", sellIn, quality);
  }

  updateQuality() {
    console.log("sellIn: ", this.sellIn)
    console.log("quality: ", this.quality)
    if (this.sellIn > 10) {
      this.quality++;
    } else if (this.sellIn > 5) {
      this.quality += 2;
    } else if (this.sellIn > 0) {
      this.quality += 3;
    } else {
      this.quality = 0;
    }
    this.sellIn--;
    if (this.quality > 50) {
      this.quality = 50;
    } 
  }
} 

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQualityOfItems() {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].updateQuality();
    }
    return this.items;
  }
}
module.exports = {
  Item,
  StandardItem,
  AgedBrieItem,
  SulfurasItem,
  BackstagePassesItem,
  Shop
}
