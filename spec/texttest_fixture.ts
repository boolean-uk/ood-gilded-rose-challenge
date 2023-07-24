import { Shop } from "../src";
import { Legendary } from "../src/legendary";
import { Connjured } from "../src/conjured";
import { Normal_Item } from "../src/normal_item";
import { Backstage_pass } from "../src/backstage_pass";

const items = [
    new Normal_Item("+5 Dexterity Vest", 10, 20),
    new Normal_Item("Aged Brie", 2, 0),
    new Normal_Item("Elixir of the Mongoose", 5, 7),
    new Legendary("Sulfuras, Hand of Ragnaros", 0, 80),
    new Legendary("Sulfuras, Hand of Ragnaros", -1, 80),
    new Backstage_pass("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Backstage_pass("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new Backstage_pass("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    new Connjured("Conjured Mana Cake", 3, 6),
];

const days = Number(process.argv[2]) || 2;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}
  