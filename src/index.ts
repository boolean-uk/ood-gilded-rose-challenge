
import { Item } from "./item";

export class Shop {

  itemList : Item[];

  constructor(itemList: Item[]) {
    this.itemList = itemList;
  }



  updateQuality() {
    for (const item of this.itemList) {
      item.update();
    }
    return this.itemList;
  };  
}