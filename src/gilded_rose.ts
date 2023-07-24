// TODO zmienic plik na ts, usunąc item, zmienic w shop w costructorze z tablicy items na tablice item, 

import { Item} from "./item";

class Shop {

  itemList: Item[];

  constructor(itemList: Item[]) {
    this.itemList = itemList;
  }



  updateQuality() {
    Array.from(this.itemList).forEach(item => {
      item.update();
      
    });
    return ItemsList
    };

    
  
}


