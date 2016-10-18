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
var GameComponent = (function () {
    function GameComponent() {
        this.users = [
            {
                username: 'palingram',
                avatarImg: 'resources/images/chosen/E01.png',
                role: 'CZAR',
                admin: true,
                roundsWon: 2
            },
            {
                username: 'Michael',
                avatarImg: 'resources/images/chosen/F01.png',
                role: 'player',
                roundsWon: 1
            },
            {
                username: 'Daniel',
                avatarImg: 'resources/images/chosen/J01.png',
                role: 'player',
                roundsWon: 1
            },
            {
                username: 'Fortune',
                avatarImg: 'resources/images/chosen/M05.png',
                role: 'player',
                roundsWon: 2
            },
        ];
        this.answerCards = [
            'Iraqi\'s baby dicks',
            'Four bull dozers on skates',
            'planets minimized by shrink rays',
            'The wearers teeth',
            'Iraqi\'s baby dicks',
            'Four bull dozers on skates',
            'planets minimized by shrink rays',
            'The wearers teeth',
            'Iraqi\'s baby dicks',
            'Four bull dozers on skates'
        ];
        this.questionCards = [
            'What\'s your name',
            'Why are your toes green',
            'Where did you grow up'
        ];
        this.currentQIndex = 0;
    }
    //
    GameComponent.prototype.answerSelected = function (card) {
        //@TODO emit this event onto the socket connection
        this.recentlyAddedAnswer = card;
    };
    //
    GameComponent.prototype.selectAQuestion = function () {
        this.question = this.questionCards[this.currentQIndex++];
        if (this.currentQIndex >= this.questionCards.length) {
            this.currentQIndex = 0;
        }
    };
    GameComponent = __decorate([
        core_1.Component({
            selector: 'game-page',
            templateUrl: 'main/routes/game/game.tpl.html',
            styleUrls: ['main/routes/game/game.tpl.css']
        }), 
        __metadata('design:paramtypes', [])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map