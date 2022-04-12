const update = (item) => {
  item.sellIn--
  item.quality++
  if (item.sellIn <= 10) item.quality++
  if (item.sellIn <= 5) item.quality++
  if (item.sellIn < 0) item.quality = 0
}

module.exports = update
