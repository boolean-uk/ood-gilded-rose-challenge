class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  isNormalItem(item) {
    return (
      item.name != "Aged Brie" &&
      item.name != "Backstage passes to a TAFKAL80ETC concert" &&
      item.name != "Sulfuras, Hand of Ragnaros" &&
      !item.name.includes('Conjured')
    );
  }

  isAgedBrie(item) {
    return item.name === "Aged Brie";
  }

  isBackstagePasses(item) {
    return item.name === "Backstage passes to a TAFKAL80ETC concert";
  }

  updateSellIn(item) {
    if (item.name != "Sulfuras, Hand of Ragnaros") {
      item.sellIn--;
    }
  }

  updateConjuredItem(item){
    if(item.name.includes('Conjured')) {
    if(item.quality > 0) {
        item.quality-=2;
    }
    if(item.quality > 0 && item.sellIn < 0) {
        item.quality-=2;
    }
   }
  }

  updateNormalItem(item) {
    if (this.isNormalItem(item)) {
      if (item.quality > 0) {
        item.quality--;
      }

      if (item.sellIn < 0 && item.quality > 0) {
        item.quality--;
      }
    }
  }

  updateBackstagePasses(item) {
    if (this.isBackstagePasses(item)) {
      item.quality++;
      if (item.sellIn < 10) {
        if (item.quality < 50) {
          item.quality++;
        }
      }
      if (item.sellIn < 5) {
        if (item.quality < 50) {
          item.quality++;
        }
      }
      if (item.sellIn < 0) {
        item.quality = 0;
      }
    }
  }

  updateAgedBrie(item) {
    if (this.isAgedBrie(item) && item.quality < 50) {
      item.quality++;
    }

    if (item.sellIn < 0) {
      if (item.name === "Aged Brie") {
        if (item.quality < 50) {
          item.quality++;
        }
      }
    }
  }

  updateQuality() {
    for (const item of this.items) {
      this.updateSellIn(item);
      this.updateNormalItem(item);
      this.updateConjuredItem(item)
      this.updateBackstagePasses(item);
      this.updateAgedBrie(item);
    }
  }
}
module.exports = {
  Item,
  Shop,
};
