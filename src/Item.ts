export interface Item {
    updateQuality(): void
    getName(): string
    getSellIn(): number
    getQuality(): number
}

abstract class AbstractItem implements Item {
    constructor(protected name: string, protected sellIn: number, protected quality: number) {}

    updateQuality(): void {}
    getName(): string {
        return this.name
    }

    getSellIn(): number {
        return this.sellIn
    }

    getQuality(): number {
        return this.quality
    }
}

export class RegularItem extends AbstractItem {
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality)
    }

    updateQuality(): void {
        this.sellIn -= 1
        this.quality = Math.max(0, this.quality - 1)
    }
}

export class LegendaryItem extends AbstractItem {
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality)
    }

    updateQuality(): void {}

}

export class AgedItem extends AbstractItem{
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality)
    }

    updateQuality(): void {
        if (this.sellIn > 0) {
            this.quality = Math.min(50, this.quality + 1)
        } else {
            this.quality = Math.min(50, this.quality + 2)
        }

        this.sellIn -= 1
    }

}

export class ConcertItem extends AbstractItem{
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality)
    }

    updateQuality(): void {
        if (this.sellIn > 10) {
            this.quality = Math.min(50, this.quality + 1)
        } else if (this.sellIn > 5) {
            this.quality = Math.min(50, this.quality + 2)
        } else if (this.sellIn > 0) {
            this.quality = Math.min(50, this.quality + 3)
        } else {
            this.quality = 0
        }

        this.sellIn -= 1
    }
}

export class ConjuredItem extends AbstractItem {
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality)
    }

    updateQuality(): void {
        if (this.sellIn > 0) {
            this.quality = Math.max(0, this.quality - 1)
        } else {
            this.quality = Math.max(0, this.quality - 2)
        }

        this.sellIn -= 1
    }
}