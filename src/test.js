const Item = require('./item')
class StandardItem extends Item {
  updateName(newName) {
    this.name = newName
  }
}

// const item = new Item('apple', 2, 3)
const standard = new StandardItem('banana', 2, 3)
const arr = [standard]
for (const item of arr) {
  item.updateName('bur')
}
console.log(standard)