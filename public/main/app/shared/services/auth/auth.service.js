"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.signedIn = false;
        this.signedIn = !!localStorage.getItem('auth_token');
    }
    AuthService.prototype.signUp = function (name, email, password) {
        var _this = this;
        console.log(email, name, password, 'info?');
        var headers = new http_1.Headers();
        headers.append('Content-type', 'application/json');
        return this.http
            .post('/api/auth/signup', JSON.stringify({ name: name, email: email, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res.success) {
                localStorage.setItem('auth_token', 'Bearer ' + res.auth_token);
                _this.signedIn = true;
            }
            return res.success;
        });
    };
    AuthService.prototype.signIn = function (email, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-type', 'application/json');
        return this.http
            .post('/api/auth/login', JSON.stringify({ email: email, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res.success) {
                localStorage.setItem('auth_token', res.auth_token);
                _this.signedIn = true;
            }
        });
    };
    AuthService.prototype.signOut = function () {
        localStorage.removeItem('auth_token');
        this.signedIn = false;
    };
    AuthService.prototype.isSignedIn = function () {
        return this.signedIn;
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
