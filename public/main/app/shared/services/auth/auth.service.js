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
var AuthService = (function () {
    function AuthService(http) {
        this.signedIn = false;
        this.signedIn = !!localStorage.getItem('auth_token');
        this._http = http;
    }
    AuthService.prototype.signUp = function (name, email, password) {
        console.log(email, name, password, 'info?');
        var headers = new http_1.Headers({ 'Content-type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var data = JSON.stringify({ name: name, email: email, password: password });
        return this._http
            .post('/api/auth/signup', data, options).map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    AuthService.prototype.signIn = function (email, password) {
        var headers = new http_1.Headers({ 'Content-type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var cred = JSON.stringify({ email: email, password: password });
        return this._http
            .post('/api/auth/login', cred, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    AuthService.prototype.signOut = function () {
        localStorage.removeItem('auth_token');
        this.signedIn = false;
    };
    AuthService.prototype.isSignedIn = function () {
        return this.signedIn;
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http))
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
