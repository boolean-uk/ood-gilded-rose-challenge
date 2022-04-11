
# Domain Model

## Class
Item

### Requirements
- All items have a SellIn value which denotes the number of days we have to sell the item
- All items have a Quality value which denotes how valuable the item is
- do not alter the Item class or Items property

### Properties
- name @String
- sellIn @Number (number of days we have to sell the item)
- quality @Number (the value of the item)

---

## Class
Shop

### Requirements
#### "SellIn" related
- At the end of each day our system lowers sellIn for every item 
- Once the sell by date has passed, Quality degrades twice as fast


#### "Quality" related
- At the end of each day our system lowers quality for every item
   EXCEPT "aged brie": it increases its quality
   EXCEPT "Sulfuras": it  never has to be sold and always quality = 80
   EXCEPT "Backstage": it increases in quality as its SellIn value approaches.
   Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less Quality drops to 0 after the concert
   EXCEPT "conjured": it lowers quality twice as fast as normal items
- The Quality of an item is never negative
- The Quality of an item is never more than 50


### Properties
- items @Array[@Item{name, sellIn, quality}]
  
### Methods
isValidQuality():  The Quality of an item is never negative and is never more than 50 
updateAgedBrie(): increase the item's quality by 1, after sellIn <= 0 it increase quality by 2
updateBackstage(): it increases in quality as its SellIn value approaches.
   Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less Quality drops to 0 after the concert
decreaseQuality(): decrease the item's quality by 1
decreaseQualityDouble(): decrease the item's quality twice as fast as normal items (after sellIn <=0, includes "conjured")