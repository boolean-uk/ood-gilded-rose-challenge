"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
var Shop = /** @class */ (function () {
    function Shop(items) {
        this.items = items;
    }
    Shop.prototype.updateQuality = function () {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].updateQuality();
        }
    };
    Shop.prototype.getItems = function () {
        return this.items;
    };
    return Shop;
}());
exports.Shop = Shop;
