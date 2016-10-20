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
var core_1 = require("@angular/core");
var invitation_service_1 = require('../../shared/services/invitation.service');
var Rx_1 = require('rxjs/Rx');
var InvitesComponent = (function () {
    function InvitesComponent(getUserService) {
        this.getUserService = getUserService;
        this.friendsList = [];
    }
    InvitesComponent.prototype.getUsers = function () {
        // this.userInput = 'menace';
        // this.getUserService.getUsers(this.token).subscribe(user => console.log(user),
        //     err => {
        //         console.log(err);
        //     });
    };
    InvitesComponent.prototype.showNoti = function () {
        this.getUsers();
        this.reload();
    };
    InvitesComponent.prototype.handleResponse = function (res) {
        if (!res[0].status) {
            this.friendsList = [];
        }
        this.friendsList = res;
    };
    InvitesComponent.prototype.reload = function () {
        var _this = this;
        this.users$ = this.getUserService.getUsers('');
        this.users$.subscribe(function (user) { return _this.friendsList = user; });
    };
    InvitesComponent.prototype.handleError = function () {
        this.friendsList = [];
    };
    InvitesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.showNoti();
        this.getUsers();
        var input = document.getElementById('type-user');
        console.log(input);
        var search$ = Rx_1.Observable.fromEvent(input, 'keyup')
            .do(function () { return console.log(input.value); })
            .switchMap(function () { return _this.getUserService.getUsers(input.value); });
        search$.subscribe(function (next) { return _this.friendsList = next; }, function (err) {
            return _this.handleError();
        });
    };
    InvitesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'invites',
            templateUrl: './invites.component.html',
            styleUrls: ['./invites.component.css'],
            providers: [invitation_service_1.InvitationService]
        }),
        __param(0, core_1.Inject(invitation_service_1.InvitationService))
    ], InvitesComponent);
    return InvitesComponent;
}());
exports.InvitesComponent = InvitesComponent;
