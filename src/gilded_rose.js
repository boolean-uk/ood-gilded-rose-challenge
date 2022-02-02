class Shop {
  constructor (items = []) {
    this.items = items;
  }

  agedBrie (item) {
    if (item.name === 'Aged Brie' && item.sellIn < 0 && item.quality < 50) item.quality++;
  }

  updateQuality () {
    for (let item of this.items) {
      if (item.name == 'Sulfuras, Hand of Ragnaros') continue
      if (item.name == 'Aged Brie') {
        if (item.quality < 50) item.quality++;
      }
      if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality < 50) item.quality++;
        if (item.sellIn < 11 && item.quality < 50) item.quality++;
        if (item.sellIn < 6 && item.quality < 50) item.quality++;
      }

      if (item.name == "+5 Dexterity Vest" || item.name == "Elixir of the Mongoose" || item.name == "Conjured Mana Cake") {
        if (item.quality > 0) item.quality--;
      }

      item.sellIn--;
      this.agedBrie(item)
      if (item.name == 'Aged Brie' && item.sellIn < 0) continue
      if (item.name === 'Backstage passes to a TAFKAL80ETC concert' && item.sellIn < 0) item.quality = 0
      if (item.quality > 0 && item.sellIn < 0) item.quality--;
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



