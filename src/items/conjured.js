const UpdateableItem = require('./UpdateableItem')

class Conjured extends UpdateableItem {
  getFactor () {
    return super.getFactor() * 2
  }
}

module.exports = Conjured
