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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var core_2 = require('@angular/core');
var InvitationService = (function () {
    function InvitationService(_http) {
        this._http = _http;
        // pickPromise = fetch('./pick').then(res => res.json());
        this.getUsersApi = 'http://localhost:3001/users/all';
        this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODA4YWQ0N2IyY2MwY2JmNjAwMDAwMDEiLCJpYXQiOjE0NzY5OTM2NzksImV4cCI6MTQ3NzAwMzY3OX0.2pIiDCIlyuJ2pzwlSt_RQuZY5e1ZNpeJG8YNCbqrn78';
    }
    InvitationService.prototype.getUsers = function (query) {
        if (query === void 0) { query = ''; }
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this.token });
        var sentQuery = new http_1.URLSearchParams();
        sentQuery.set('name', query);
        var options = new http_1.RequestOptions({ search: sentQuery, headers: headers });
        return this._http.get(this.getUsersApi, options)
            .do(function (res) { return console.log(res.status, 'RES'); })
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error.status, 'here is an error');
            return Rx_1.Observable.throw(error.json().error || 'Server error');
        });
    };
    InvitationService = __decorate([
        core_1.Injectable(),
        __param(0, core_2.Inject(http_1.Http))
    ], InvitationService);
    return InvitationService;
}());
exports.InvitationService = InvitationService;
