const Item = require('./Item.js')
class NormalItems extends Item{
    constructor(name,quality,sellIn) {
      super(name,quality,sellIn);
     }
     update() {
      this.sellIn > 0 ? this.quality-- : this.quality -= 2
      if(this.quality < 0) this.quality = 0
      this.sellIn--
    
    }
  }

  module.exports =NormalItems;