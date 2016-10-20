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
var auth_service_1 = require('../../../app/shared/services/auth/auth.service');
var SigninComponent = (function () {
    function SigninComponent(authService, router) {
        this.router = router;
        this.authCheck = authService;
    }
    SigninComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        console.log(this.email, this.password);
        this.authCheck.signIn(this.email, this.password).subscribe(function (result) {
            if (result.success) {
                console.log(result);
                localStorage.setItem('auth_token', result.token);
                _this.authCheck.signedIn = true;
            }
        });
    };
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'signin',
            styleUrls: ['signin.component.css'],
            templateUrl: 'signin.component.html',
            providers: [auth_service_1.AuthService]
        }),
        __param(0, core_1.Inject(auth_service_1.AuthService))
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
