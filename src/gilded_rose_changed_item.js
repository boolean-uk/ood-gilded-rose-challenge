// not real solution as it has altered the item class. 

class Item {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
    updateSellIn() {
        this.sellIn--
        return this
    }

    isPositiveQuality() {
        return this.quality > 0
    }

    isQualityLessThan50() {
        return this.quality < 50
    }

    isNegativeSellIn() {
        return this.sellIn < 0
    }

    increaseQuality(num) {
        this.quality+= num
    }

    decreaseQuality(num) {
        this.quality-=num
    }

    generalQualityDecrease(num) { 
        if(this.isPositiveQuality()) {
          this.decreaseQuality(num)
        }
        if (this.isNegativeSellIn() && this.isPositiveQuality()) {
            this.decreaseQuality(num)
          }
    }

    generalQualityIncrease(num) {
        if(this.isQualityLessThan50()) {
            this.increaseQuality(num)
          }
    }
  
  }
  
  class NormalItem extends Item {
      constructor(name, sellIn, quality) {
        super(name, sellIn, quality)
    }
    updateQuality() {
    this.generalQualityDecrease(1)
  }
}
  
  class AgedBrie extends Item {
    constructor(sellIn, quality, name = "Aged Brie") {
      super(name, sellIn, quality)
  }
    updateQuality() {  
    this.generalQualityIncrease(1)

    if (this.isNegativeSellIn() && this.isQualityLessThan50()) {
        this.increaseQuality(1)
      }
    }
  }

   
  class BackstagePasses extends Item {
    constructor(name, sellIn, quality) {
      super(name, sellIn, quality)
  }
  updateQuality() {  
  if(this.isNegativeSellIn()) {
    this.quality = 0
    return
  }

  this.generalQualityIncrease(1)

  if (this.sellIn < 11 && this.quality < 50) {
    this.increaseQuality(1)
  }
  if (this.sellIn < 6 && this.quality < 50) {
    this.increaseQuality(1)
  }
  }
  }
  
  class Conjured extends Item {
    constructor(name, sellIn, quality) {
      super(name, sellIn, quality)
  }
  updateQuality() {
    this.generalQualityDecrease(2)
  }
}

class Sulfuras extends Item {
    constructor(sellIn, quality, name = "Sulfuras, Hand of Ragnaros") {
      super(name, sellIn, quality)
  }
   updateQuality() {
       //resetting sell in as it does not change for Sulfuras
       this.sellIn++
   }
  }


  class Shop {
    constructor(items=[]){
      this.items = items;
    }
  
    updateDaily() {
      this.items.forEach(item => item.updateSellIn().updateQuality())
    }
  
  }
  
  module.exports = {
    Item,
    NormalItem,
    AgedBrie,
    Sulfuras,
    Conjured,
    BackstagePasses,
    Shop
  }
  