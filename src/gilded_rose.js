class Shop {
  constructor (items = []) {
    this.items = items;
  }
  updateQuality () {
    for (let item of this.items) {
      if (item.name == "+5 Dexterity Vest" || item.name == "Elixir of the Mongoose" || item.name == "Conjured Mana Cake" || item.name == 'Aged Brie' || item.name == 'Backstage passes to a TAFKAL80ETC concert' || item.name == 'Sulfuras, Hand of Ragnaros') {
        item.update()
      }
    }
    return this.items;
  }
}

module.exports = Shop