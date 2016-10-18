"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var QuestionComponent = (function () {
    function QuestionComponent() {
        //
        this.front = '';
        this.flip = false;
        this.select = new core_1.EventEmitter();
    }
    //Implement an interface for watching changes
    QuestionComponent.prototype.ngOnChanges = function (changes) {
        if (changes['question'].currentValue) {
            console.log(changes['question'].currentValue);
            this.onNewCard(changes['question'].currentValue);
        }
    };
    //
    QuestionComponent.prototype.flipCard = function () {
        this.flip = !this.flip;
    };
    //
    QuestionComponent.prototype.onNewCard = function (card) {
        var _this = this;
        setTimeout(function () {
            _this.front = card;
        }, 0.10);
        this.flipCard();
    };
    //
    QuestionComponent.prototype.onSelect = function () {
        this.select.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], QuestionComponent.prototype, "question", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], QuestionComponent.prototype, "select", void 0);
    QuestionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'question-card',
            templateUrl: './question.component.html',
            styleUrls: ['./question.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map