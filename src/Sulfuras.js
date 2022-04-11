const Item = require('./Item.js')
class Sulfuras extends Item{
    constructor(name,quality,sellIn) {
      super(name,quality,sellIn);
     }
     update() {
       return this
     }
  }
  module.exports =Sulfuras