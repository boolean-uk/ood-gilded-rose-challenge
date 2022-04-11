const update = (item) => {
  item.sellIn--
  if (item.quality <= 50) item.quality--
  if (item.sellIn <= 0) item.quality--
  if (item.quality < 0) item.quality = 0
}

module.exports = update
