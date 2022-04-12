const Shop = require('../src/shop.js');
const Item = require('../src/item.js');

describe("Sulfuras, Hand of Ragnaros", () => {
  it("quality never decreases in quality", () => {
    const sulfuras = new Item("Sulfuras, Hand of Ragnaros", 0, 80)
    const items = [sulfuras]
    const shop = new Shop(items)
    shop.updateSulfuras(sulfuras)
    expect(sulfuras.sellIn).toEqual(0)
    expect(sulfuras.quality).toEqual(80)
  })  
})  

//     it("never has to be sold", () => {
//     const sulfuras = new Item("Sulfuras, Hand of Ragnaros", 0, 80)
//     const items = [sulfuras]
//     const shop = new Shop(items)
//     shop.updateSulfuras(sulfuras)
//     expect(sulfuras.sellIn).toEqual(0)
//     expect(sulfuras.quality).toEqual(80)
//   })  
