const Item = require('../src/item.js')
const Standard = require('../src/standard_items.js')

describe('standard items', function () {
  // TEST1
  it('sell-in and quality decreased by 1', function () {
    // setup
    const item = new Item('+5 Dexterity Vest', 5, 10)
    const classStandard = new Standard()
    // execute
    classStandard.updateStandard(item)
    // verify
    expect(item.name).toEqual('+5 Dexterity Vest')
    expect(item.sellIn).toEqual(4)
    expect(item.quality).toEqual(9)
  })

  // TEST2
  it('quality decreased twice as fast', function () {
    // setup
    const item = new Item('+5 Dexterity Vest', -1, 10)
    const classStandard = new Standard()
    // execute
    classStandard.updateStandard(item)
    // verify
    expect(item.name).toEqual('+5 Dexterity Vest')
    expect(item.sellIn).toEqual(-2)
    expect(item.quality).toEqual(8)
  })

  // TEST3
  it('quality never goes below 0', function () {
    // setup
    const item = new Item('+5 Dexterity Vest', 5, 0)
    const classStandard = new Standard()
    // execute
    classStandard.updateStandard(item)
    // verify
    expect(item.name).toEqual('+5 Dexterity Vest')
    expect(item.sellIn).toEqual(4)
    expect(item.quality).toEqual(0)
  })
})
