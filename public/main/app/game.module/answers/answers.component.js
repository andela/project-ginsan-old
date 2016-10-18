"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AnswersComponent = (function () {
    function AnswersComponent() {
        this.card = new core_1.EventEmitter();
        this.isSpread = false;
        this.spreadStyle = {};
    }
    //define methods belonging to this class here
    AnswersComponent.prototype.toggleSpread = function () {
        this.isSpread = !this.isSpread;
    };
    //
    AnswersComponent.prototype.getCardStyle = function (i) {
        return ((i) * (this.isSpread ? 9 : .5)) + '%';
    };
    //
    AnswersComponent.prototype.getDeckStyle = function () {
        return this.isSpread ? 'fixed' : 'relative';
    };
    //
    AnswersComponent.prototype.onSelect = function (card) {
        if (this.isSpread) {
            //get the card out of this componenet
            this.card.emit(card);
        }
        this.toggleSpread();
    };
    __decorate([
        core_1.Input()
    ], AnswersComponent.prototype, "cards");
    __decorate([
        core_1.Output()
    ], AnswersComponent.prototype, "card");
    AnswersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'answers-deck',
            templateUrl: './answers.tpl.html',
            styleUrls: ['./answers.tpl.css']
        })
    ], AnswersComponent);
    return AnswersComponent;
}());
exports.AnswersComponent = AnswersComponent;
