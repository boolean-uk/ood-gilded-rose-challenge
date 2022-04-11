class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

updateAgedBrie(item) {
  item.sellIn--;
  if (item.quality < 50) item.quality++;
  if(item.sellIn < 0 && item.quality < 50) item.quality++
}

updateBackStagePass(item) {
   if (item.quality < 50) item.quality++
   if (item.sellIn < 11 && item.quality < 50) item.quality++
   if (item.sellIn < 6 && item.quality < 50) item.quality++ 
  item.sellIn--
  if(item.sellIn < 0) item.quality = 0
}

updateSulfuras(item) {
  if (item.quality < 50) item.quality++
 
}

updateNormalItem(item) {
  item.sellIn > 0 ? item.quality-- : item.quality -= 2
  if(item.quality < 0) item.quality = 0
  item.sellIn--


}

updateConjuredItem(item) {
  item.sellIn > 0 ? item.quality-=2 : item.quality -= 4
  if(item.quality < 0) item.quality = 0
  item.sellIn--
}

  updateQuality() {
    this.items.forEach(item => {
      if(item.name === 'Aged Brie') {
        this.updateAgedBrie(item);
      } else if(item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.updateBackStagePass(item)
      } else if(item.name === 'Sulfuras, Hand of Ragnaros') {
        this.updateSulfuras(item)
      }else if(item.name === "Conjured Mana Cake") {
        this.updateConjuredItem(item)
      }else {
        this.updateNormalItem(item)
      }
    })
    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}

const agedBrie = new Item('Aged Brie',2,4)
const shop = new Shop([agedBrie])
shop.updateQuality()
shop.updateQuality()
shop.updateQuality()

console.log(agedBrie);

console.log(shop);