const Item = require('../src/Item')

class AgedBrie extends Item {
    constructor(name,quality,sellIn) {
     super(name,quality,sellIn);
    }
   
    update() {
      this.sellIn--;
      if (this.quality < 50) this.quality++;
      if(this.sellIn < 0 && this.quality < 50) this.quality++
    }
  }

  module.exports =AgedBrie