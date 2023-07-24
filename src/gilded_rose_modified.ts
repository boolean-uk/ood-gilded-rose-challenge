import { Item } from "./Item";

export class Shop {
    constructor(private items: Item[]) {
    }

    updateQuality(): void {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].updateQuality()
        }
    }

    getItems(): Item[] {
        return this.items
    }
}
