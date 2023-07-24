"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConjuredItem = exports.ConcertItem = exports.AgedItem = exports.LegendaryItem = exports.RegularItem = void 0;
var AbstractItem = /** @class */ (function () {
    function AbstractItem(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    AbstractItem.prototype.updateQuality = function () { };
    AbstractItem.prototype.getName = function () {
        return this.name;
    };
    AbstractItem.prototype.getSellIn = function () {
        return this.sellIn;
    };
    AbstractItem.prototype.getQuality = function () {
        return this.quality;
    };
    return AbstractItem;
}());
var RegularItem = /** @class */ (function (_super) {
    __extends(RegularItem, _super);
    function RegularItem(name, sellIn, quality) {
        return _super.call(this, name, sellIn, quality) || this;
    }
    RegularItem.prototype.updateQuality = function () {
        this.sellIn -= 1;
        this.quality = Math.max(0, this.quality - 1);
    };
    return RegularItem;
}(AbstractItem));
exports.RegularItem = RegularItem;
var LegendaryItem = /** @class */ (function (_super) {
    __extends(LegendaryItem, _super);
    function LegendaryItem(name, sellIn, quality) {
        return _super.call(this, name, sellIn, quality) || this;
    }
    LegendaryItem.prototype.updateQuality = function () { };
    return LegendaryItem;
}(AbstractItem));
exports.LegendaryItem = LegendaryItem;
var AgedItem = /** @class */ (function (_super) {
    __extends(AgedItem, _super);
    function AgedItem(name, sellIn, quality) {
        return _super.call(this, name, sellIn, quality) || this;
    }
    AgedItem.prototype.updateQuality = function () {
        if (this.sellIn > 0) {
            this.quality = Math.min(50, this.quality + 1);
        }
        else {
            this.quality = Math.min(50, this.quality + 2);
        }
        this.sellIn -= 1;
    };
    return AgedItem;
}(AbstractItem));
exports.AgedItem = AgedItem;
var ConcertItem = /** @class */ (function (_super) {
    __extends(ConcertItem, _super);
    function ConcertItem(name, sellIn, quality) {
        return _super.call(this, name, sellIn, quality) || this;
    }
    ConcertItem.prototype.updateQuality = function () {
        if (this.sellIn > 10) {
            this.quality = Math.min(50, this.quality + 1);
        }
        else if (this.sellIn > 5) {
            this.quality = Math.min(50, this.quality + 2);
        }
        else if (this.sellIn > 0) {
            this.quality = Math.min(50, this.quality + 3);
        }
        else {
            this.quality = 0;
        }
        this.sellIn -= 1;
    };
    return ConcertItem;
}(AbstractItem));
exports.ConcertItem = ConcertItem;
var ConjuredItem = /** @class */ (function (_super) {
    __extends(ConjuredItem, _super);
    function ConjuredItem(name, sellIn, quality) {
        return _super.call(this, name, sellIn, quality) || this;
    }
    ConjuredItem.prototype.updateQuality = function () {
        if (this.sellIn > 0) {
            this.quality = Math.max(0, this.quality - 1);
        }
        else {
            this.quality = Math.max(0, this.quality - 2);
        }
        this.sellIn -= 1;
    };
    return ConjuredItem;
}(AbstractItem));
exports.ConjuredItem = ConjuredItem;
