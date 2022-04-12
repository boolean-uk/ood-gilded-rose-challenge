const update = (item) => {
  item.sellIn--
  if (item.quality <= 50) item.quality -= 2
  if (item.quality <= 0) item.quality = 0
}

module.exports = update
