const Shop = require('../src/shop.js')
const UpdateableItem = require('../src/items/UpdateableItem.js')

describe('Gilded Rose', function () {
  it('should foo', function () {
    const gildedRose = new Shop([new UpdateableItem('foo', 0, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('foo')
  })
})
