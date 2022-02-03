
class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

}

class NormalItem extends Item {
    constructor(name, sellIn, quality) {
      super(name, sellIn, quality)
  }
  updateDaily() {
    this.sellIn -= 1

    if(this.quality > 0) {
      this.quality -= 1
    }
    if (this.sellIn < 0 && this.quality > 0) {
        this.quality -= 1
      }
    }

}

class AgedBrie extends Item {
  constructor(sellIn, quality, name = "Aged Brie") {
    super(name, sellIn, quality)
}
  updateDaily() {
  this.sellIn -= 1

  if(this.quality < 50) {
    this.quality += 1
  }
  if (this.sellIn < 0 && this.quality < 50) {
      this.quality += 1
    }
  }

}

class Sulfuras extends Item {
  constructor(sellIn, quality, name = "Sulfuras, Hand of Ragnaros") {
    super(name, sellIn, quality)
}
 updateDaily() {}
}

class BackstagePasses extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
}
updateDaily() {
this.sellIn -= 1

if(this.sellIn < 0) {
  this.quality = 0
  return
}
if(this.quality < 50) {
  this.quality += 1
}
if (this.sellIn < 11 && this.quality < 50) {
  this.quality += 1
}
if (this.sellIn < 6 && this.quality < 50) {
  this.quality += 1
}
}
}


class Conjured extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
}
updateDaily() {
  this.sellIn -= 1

  if (this.quality === 1) {
    this.quality--
  }
  if(this.quality - 2 >= 0) {
    this.quality -= 2
  }
  if (this.sellIn < 0 && this.quality - 2 >= 0) {
      this.quality -= 2
    }
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => item.updateDaily())
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
