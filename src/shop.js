class Shop {
  constructor(items = []) {
    this.items = items
  }

  isValidQuality() {
    for (const item of this.items) {
      if (item.quality < 0 || item.quality > 50) return false
      if (item.name.includes('Sulfuras') && item.quality === 80) return true
    }
    return true
  }

  updateAgedBrie(item) {
    item.sellIn--
    item.quality++
    if (item.sellIn <= 0) item.quality++
  }

  updateQuality() {
    // loop through the items array
  for (const item of this.items) {
      // if the item is NOT "aged brie" nor "Backstage passes to a ta--- concert",
      if ( item.name === "Aged Brie" ) this.updateAgedBrie(item)
       
    //     this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //     // then, if the item's quality is more than 0,
    //     if (this.items[i].quality > 0) {
    //       // then, if the item is not "Sulfuras, hand of ragnaros",
    //       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //         // then the item's quality will decrease by 1
    //         this.items[i].quality = this.items[i].quality - 1 
    //     }
    //     }
    //   } // if the item IS "aged brie" or "Backstage passes to a ta--- concert",
    //   else {
    //     // then if the "aged brie" or "Backstage---" quality is lower than 50,
    //     if (this.items[i].quality < 50) {
    //       // then the item's quality will increase by 1
    //       this.items[i].quality = this.items[i].quality + 1
    //       // if the item is "Backstage passes to ------",
    //       if (
    //         this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'
    //       ) {
    //         // then, if "Backstage passes to ------" sellIn days is less than 11,
    //         if (this.items[i].sellIn < 11) {
    //           // then, if "Backstage passes to ------" quality is lower than 50,
    //           if (this.items[i].quality < 50) {
    //             // then "Backstage passes to ------" quality will increase by 1
    //             this.items[i].quality = this.items[i].quality + 1
    //           }
    //         }
    //         // if "Backstage passes to ------" sellIn days is less than 6,
    //         if (this.items[i].sellIn < 6) {
    //           // then, if "Backstage passes to ------" quality is lower than 50,
    //           if (this.items[i].quality < 50) {
    //             // then "Backstage passes to ------" quality will increase by 1
    //             this.items[i].quality = this.items[i].quality + 1
    //           }
    //         }
    //       }
    //     }
    //   }
    //   //   If the item is NOT "sulfuras, hand of regnaros",
    //   if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //     // then the sellIn days will decrease by 1",
    //     this.items[i].sellIn = this.items[i].sellIn - 1
    //   }
    //   //   If the item's sellIn days is lower than 0;
    //   if (this.items[i].sellIn < 0) {
    //     //  and If the item is NOT "aged Brie",
    //     if (this.items[i].name != 'Aged Brie') {
    //       //  and If the item is NOT 'Backstage passes to a TAFKAL80ETC concert',
    //       if (
    //         this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
    //       ) {
    //         // then, if that item quality is more than 0;
    //         if (this.items[i].quality > 0) {
    //           // and if that item is NOT "sulfuras"
    //           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //             // then the items' quality will decrease by 1
    //             this.items[i].quality = this.items[i].quality - 1
    //           }
    //         }
    //       }
    //       // if the item is "backstage.-----",
    //       else {
    //         // then the items' quality will be 0???????
    //         this.items[i].quality =
    //           this.items[i].quality - this.items[i].quality
    //       }
    //     }
    //     // if the item is "aged brie",
    //     else {
    //       // and the quality is lower than 50,
    //       if (this.items[i].quality < 50) {
    //         // the "aged brie"'s quality will increase by 1
    //         this.items[i].quality = this.items[i].quality + 1
    //       }
    //     }
    //   }
    // }
}
return this.items
 }
}

module.exports = Shop
