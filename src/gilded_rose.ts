export abstract class Item {
  constructor(private _name: string, private _sellIn: number, private _quality: number) {
  }

  public get quality(): number {
    return this._quality
  }
  public set quality(value: number) {
    this._quality = value
  }
  public get sellIn(): number {
    return this._sellIn
  }
  public set sellIn(value: number) {
    this._sellIn = value
  }
  public get name(): string {
    return this._name
  }
  public set name(value: string) {
    this._name = value
  }

  public abstract updateQuality(): void
}

export class StandardItem extends Item {
  public override updateQuality(): void {
    this.sellIn <= 0 ? (this.quality -= 2) : this.quality--
    this.sellIn--
    if (this.quality < 0) {
      this.quality = 0
    }
  }
}

export class AgedBrieItem extends Item {
  public override updateQuality(): void {
    this.quality++
    this.sellIn--
    if (this.quality > 50) {
      this.quality = 50
    }
  }
}

export class SulfurasItem extends Item {
  constructor(sellIn: number) {
    super('Sulfuras, Hand of Ragnaros', sellIn, 80)
  }

  public override updateQuality(): void { }
}

export class BackstagePassesItem extends Item {
  constructor(sellIn: number, quality: number) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)
  }

  public override updateQuality(): void {
    if (this.sellIn > 10) {
      this.quality++
    } else if (this.sellIn > 5) {
      this.quality += 2
    } else if (this.sellIn > 0) {
      this.quality += 3
    } else {
      this.quality = 0
    }
    this.sellIn--
    if (this.quality > 50) {
      this.quality = 50
    }
  }
}

export class ConjuredItem extends Item {
  constructor(sellIn: number, quality: number) {
    super('Conjured Mana Cake', sellIn, quality)
  }

  public override updateQuality(): void {
    this.sellIn <= 0 ? (this.quality -= 4) : (this.quality -= 2)
    this.sellIn--
    if (this.quality < 0) {
      this.quality = 0
    }
  }
}

export class Shop {
  items: Item[]
  constructor(items: Item[] = []) {
    this.items = items
  }

  updateQualityOfItems(): Item[] {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].updateQuality()
    }
    return this.items
  }
}
