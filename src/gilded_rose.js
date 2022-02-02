class Shop {
  constructor (items = []) {
    this.items = items;
  }

  normalItemsQualityUpdate (item) {
    if (item.name != 'Sulfuras, Hand of Ragnaros' && item.quality > 0) {
      item.quality--;
    }
  }

  backstageQualityUpdate (item) {
    if (item.quality < 50) item.quality++;
    if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.sellIn < 11 && item.quality < 50) item.quality++;
      if (item.sellIn < 6 && item.quality < 50) item.quality++;
    }
  }

  nonSulfurasItemUpdate (item) {
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn--;
    }
  }

  updateQuality () {
    for (let item of this.items) {
      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        this.normalItemsQualityUpdate(item)
      } else {
        this.backstageQualityUpdate(item)
      }
      this.nonSulfurasItemUpdate(item)

      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
              if (item.name != 'Sulfuras, Hand of Ragnaros') {
                item.quality--;
              }
            }
          } else {
            item.quality = 0;
          }
        } else {
          if (item.quality < 50) {
            item.quality++;
          }
        }
      }
    }

    return this.items;
  }
}

class Item {
  constructor (name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

module.exports = {
  Item,
  Shop
}



