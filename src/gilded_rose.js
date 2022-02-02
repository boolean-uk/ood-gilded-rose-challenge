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
  constructor(name, sellIn, quality) {
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
  constructor(name, sellIn, quality) {
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
if (this.sellIn < 10 && this.quality < 50) {
  this.quality += 1
}
if (this.sellIn < 5 && this.quality < 50) {
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

  if(this.quality > 0) {
    this.quality -= 2
  }
  if (this.sellIn < 0 && this.quality > 0) {
      this.quality -= 2
    }
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
        this.items[i].updateDaily()
    }
    return this.items
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

