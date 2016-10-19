"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var FloorComponent = (function () {
    //
    function FloorComponent() {
        this.cards = [];
        this.animate = false;
    }
    FloorComponent.prototype.addAnimation = function () {
        this.animate = true;
    };
    //Implementation of change detection interface
    FloorComponent.prototype.ngOnChanges = function (changes) {
        if (changes['card'].currentValue) {
            this.cards.unshift(changes['card'].currentValue);
            this.addAnimation();
        }
    };
    __decorate([
        core_1.Input()
    ], FloorComponent.prototype, "card");
    FloorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'floor',
            templateUrl: './floor.component.html',
            styleUrls: ['./floor.component.css']
        })
    ], FloorComponent);
    return FloorComponent;
}());
exports.FloorComponent = FloorComponent;
