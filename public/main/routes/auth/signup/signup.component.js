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
var SignupComponent = (function () {
    function SignupComponent(authService, router) {
        this.router = router;
        this.authCheck = authService;
    }
    SignupComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        console.log(this.name, this.email, this.password, 'values');
        this.authCheck.signUp(this.name, this.email, this.password).subscribe(function (result) {
            if (result.success) {
                console.log(result);
                localStorage.setItem('auth_token', 'Bearer ' + result.token);
                localStorage.setItem('user_id', 'Bearer ' + result.userId);
                _this.authCheck.signedIn = true;
                _this.router.navigate(['/']);
            }
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'signup',
            templateUrl: 'signup.component.html',
            styleUrls: ['signup.component.css'],
            providers: [auth_service_1.AuthService]
        }),
        __param(0, core_1.Inject(auth_service_1.AuthService))
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
