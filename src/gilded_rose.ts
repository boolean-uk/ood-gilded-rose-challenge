const MAX_QUALITY = 50;
const MIN_QUALITY = 0;
const BACKSTAGE_PASS_QUALITY_STEP_1 = 1;
const BACKSTAGE_PASS_QUALITY_STEP_2 = 2;
const BACKSTAGE_PASS_QUALITY_STEP_3 = 3;
const BACKSTAGE_PASS_SELLIN_THRESHOLD_1 = 10;
const BACKSTAGE_PASS_SELLIN_THRESHOLD_2 = 5;

// Utility function to handle quality boundary conditions
function clampQuality(quality: number): number {
  return Math.min(MAX_QUALITY, Math.max(MIN_QUALITY, quality));
}

export abstract class Item {
  constructor(protected readonly _name: string, protected _sellIn: number, protected _quality: number) {}

  public get quality(): number {
    return this._quality
  }

  public get sellIn(): number {
    return this._sellIn
  }

  public get name(): string {
    return this._name
  }

  public abstract updateQuality(): void
}

export class StandardItem extends Item {
  public override updateQuality(): void {
    this._sellIn <= 0 ? (this._quality -= 2) : this._quality--;
    this._sellIn--;
    this._quality = clampQuality(this._quality);
  }
}

export class AgedBrieItem extends Item {
  public override updateQuality(): void {
    this._quality++;
    this._sellIn--;
    this._quality = clampQuality(this._quality);
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
    if (this._sellIn > BACKSTAGE_PASS_SELLIN_THRESHOLD_1) {
      this._quality += BACKSTAGE_PASS_QUALITY_STEP_1;
    } else if (this._sellIn > BACKSTAGE_PASS_SELLIN_THRESHOLD_2) {
      this._quality += BACKSTAGE_PASS_QUALITY_STEP_2;
    } else if (this._sellIn > 0) {
      this._quality += BACKSTAGE_PASS_QUALITY_STEP_3;
    } else {
      this._quality = 0;
    }
    this._sellIn--;
    this._quality = clampQuality(this._quality);
  }
}

export class ConjuredItem extends Item {
  constructor(sellIn: number, quality: number) {
    super('Conjured Mana Cake', sellIn, quality)
  }

  public override updateQuality(): void {
    this._sellIn <= 0 ? (this._quality -= 4) : (this._quality -= 2);
    this._sellIn--;
    this._quality = clampQuality(this._quality);
  }
}

export class Shop {
  items: Item[]
  constructor(items: Item[] = []) {
    this.items = items
  }

  updateQualityOfItems(): Item[] {
    for (const item of this.items) {
      item.updateQuality();
    }
    return this.items;
  }
}
