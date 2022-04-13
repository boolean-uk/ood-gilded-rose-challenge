
const UpdateableItem = require('../src/items/UpdateableItem')
const Shop = require('../src/shop')
const AgedBrie = require('../src/items/agedBrie')
const Sulfuras = require('../src/items/sulfuras')
const Pass = require('../src/items/pass')
const Conjured = require('../src/items/conjured')

const items = [
  new UpdateableItem('+5 Dexterity Vest', 10, 20),
  new AgedBrie(2, 0),
  new UpdateableItem('Elixir of the Mongoose', 5, 7),
  new Sulfuras('Hand of Ragnaros', 0, 80),
  new Sulfuras('Hand of Ragnaros', -1, 80),
  new Pass('Backstage passes to a TAFKAL80ETC concert', 15, 20),
  new Pass('Backstage passes to a TAFKAL80ETC concert', 10, 49),
  new Pass('Backstage passes to a TAFKAL80ETC concert', 5, 49),

  // This Conjured item does not work properly yet
  new Conjured('Conjured Mana Cake', 3, 6)
]

const days = Number(process.argv[2]) || 2
const gildedRose = new Shop(items)

console.log('OMGHAI!')
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`)
  console.log('name, sellIn, quality')
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`))
  gildedRose.updateQuality()
}
