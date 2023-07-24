/* eslint-disable prettier/prettier */
class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

class BasicItem extends Item {


  constructor(name, sellIn, quality,conjurned) {
    super(name,sellIn,quality)
    this.conjurned=conjurned
    if(conjurned)
    {
      this.mulitplier=2
    }
    else
    {
      this.mulitplier=1
    }

  }
   
  
  updateQuality() {
    if (this.sellIn > 0) {
      this.sellIn--
      this.decreaseQuality(1)
    } else {
      this.sellIn--
      this.decreaseQuality(2)
    }
  }

  decreaseQuality(number) {
    
    if (this.quality - number < 0) {
      this.quality = 0
    } else {
      this.quality -= number * this.mulitplier
    }
  }

  increaseQuality(number) {
    if (!(this.quality += number > 50)) {
      this.quality = 50
    } else {
      this.quality += number
    }
  }
}
class AgedBrie extends BasicItem {
  updateQuality() {
    if (this.sellIn > 0) {
      this.sellIn--
      this.increaseQuality(1)
    } else {
      this.sellIn--
      this.increaseQuality(2)
    }
  }
}

class Sulfuras extends BasicItem {
  updateQuality()
  { 
  }
}

class BackstagePasses extends BasicItem {

  updateQuality()
  {
    if(this.sellIn>10)
    {
      this.sellIn--
      this.increaseQuality(1)
    }else if(this.sellIn >5)
    {
      this.sellIn--
      this.increaseQuality(2)
    }
    if(this.sellIn<5 && this.sellIn>0) {
      this.sellIn--
      this.increaseQuality(3)
    }
    else if (this.sellIn<=0) {
      this.sellIn--
      this.quality=0
    }
  }
}

const basicItem = new BasicItem("basicItem",5,20)
const agedBrie = new AgedBrie("agedBrie",5,5)
const sulfuras = new Sulfuras("sulfuras",0,80)
const backstagePasses = new BackstagePasses("backstage passes",4,5)
const items = [ basicItem,agedBrie,sulfuras,backstagePasses]

class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateQuality() {
   this.items.forEach(item => item.updateQuality())
    return this.items
  }
}

const shop = new Shop(items)
// console.log(shop.items)
shop.updateQuality()
// console.log(shop.items)
shop.updateQuality()
// console.log(shop.items)
shop.updateQuality()
console.log(shop.items)
// shop.updateQuality()
// console.log(shop.items)
// shop.updateQuality()
// console.log(shop.items)
// shop.updateQuality()
// console.log(shop.items)
// shop.updateQuality()
// console.log(shop.items)
// shop.updateQuality()
// console.log(shop.items)



module.exports = {
  Item,
  Shop, 
  BasicItem,
  AgedBrie, 
  Sulfuras, 
  BackstagePasses
}
