class Shop {
  constructor(items = []){
    this.items = items
  }

  updateQuality() {
    const standardItems = ['+5 Dexterity Vest', 'Elixir of the Mongoose']
    for (const item of this.items) {
      if (standardItems.includes(item.name)) {
        this.updateStandardItem(item)
      } 
      else if (item.name === 'Aged Brie') {
        this.updateAgedBrie(item)
      }
      else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.updateBackstagePass(item)
      }
    }

    return this.items;
  }

  updateStandardItem(item) {
    this.updateSellIn(item)
    if (item.quality > 0) {
      item.quality--
      if (item.sellIn < 0) {
      item.quality--
      }
    }
  }

  updateAgedBrie(item) {
    this.updateSellIn(item)
    if (item.quality < 50) {
      item.quality++
      if (item.sellIn < 0) {
      item.quality++
      }
    }
  }

  updateBackstagePass(item) {
    if (item.quality < 50) {
      item.quality++
    }
    if (item.quality < 50 && item.sellIn <= 10) {
      item.quality++
    }
    if (item.quality < 50 && item.sellIn <= 5) {
      item.quality++
    }
    this.updateSellIn(item)
    if (item.sellIn < 0) {
      item.quality = 0
    }
  }

  updateSellIn(item) {
    if (item.name !== 'Sulfuras, Hand of Ragnaros') item.sellIn-- 
  }
}

module.exports = Shop
