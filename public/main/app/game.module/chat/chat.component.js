"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var angularfire2_1 = require('angularfire2');
var ChatComponent = (function () {
    function ChatComponent(angularFire) {
        this.angularFire = angularFire;
        this.gameId = "osfosadpo48329qu3";
        this.user = 'La Belle Dame sans Merci';
        this.messages = this.angularFire.database.list("/" + this.gameId + "/messages");
    }
    ChatComponent.prototype.submit = function () {
        if (this.newMessage.length > 1) {
            this.messages.push({ user: this.user, text: this.newMessage.trim() });
            //wait for ui update
            setTimeout(function () {
                wdtEmojiBundle.init('#new_message');
                this.scrollMessageDiv();
            }.bind(this), 200);
            this.newMessage = '';
        }
        else {
            this.newMessage = '';
        }
    };
    ChatComponent.prototype.scrollMessageDiv = function () {
        var scrollelement = document.getElementById('chat-messages');
        scrollelement.scrollTop = scrollelement.scrollHeight;
    };
    __decorate([
        core_1.Input()
    ], ChatComponent.prototype, "users");
    ChatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.css']
        }),
        __param(0, core_1.Inject(angularfire2_1.AngularFire))
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
