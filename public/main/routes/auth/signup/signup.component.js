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
var core_1 = require("@angular/core");
var SignupComponent = (function () {
    function SignupComponent() {
    }
    return SignupComponent;
}());
SignupComponent = __decorate([
    core_1.Component({
        selector: 'signup',
        styles: [
            "\n           .grid {\n              height: 100%;\n            }\n            background-color: #DADADA;\n            .image {\n               margin-top: -100px;\n            }\n            .column {\n               max-width: 450px;\n            }\n\n            .formStyle{\n              margin-top: 60px;\n              min-width: 35%;\n            }\n\n            .logo{\n              margin-left:20px;\n            }\n        "
        ],
        template: "\n    <nav class=\"blue darken-4\">\n      <div class=\"nav-wrapper\">\n          <a href=\"/home\" class=\"brand-logo logo\">cfh.io</a>\n          <ul class=\"right hide-on-med-and-down\">\n              <li><a class=\"header item\" routerLinkActive=\"active\" routerLink=\"/home/\">Home</a></li>\n              <li><a class=\"header item\" routerLinkActive=\"active\" routerLink=\"/auth/signin\">Login</a></li>\n              <li class=\"active\"><a class=\"header item\" routerLinkActive=\"active\" routerLink=\"/auth/signup\">Signup</a></li>\n          </ul>\n      </div>\n  </nav>\n    <div class=\"valign-wrapper\">\n\n                <div class=\"z-depth-1 grey lighten-4 row valign formStyle\">\n                    <h5 class=\"blue-text center-align\">Register</h5>\n                    <form class=\"col s12\" method=\"post\">\n\n                        <div class='row'>\n                            <div class='input-field col s12'>\n                                <input class='validate' type='email' name='email' id='email' />\n                                <label for='email'>Enter Your Email</label>\n                            </div>\n                        </div>\n\n                        <div class='row'>\n                            <div class='input-field col s12'>\n                                <input class='validate' type='password' name='password' id='password' />\n                                <label for='password'>Enter Your Password</label>\n                            </div>\n                        </div>\n\n                        <div class='row'>\n                            <div class='input-field col s12'>\n                                <input class='validate' type='password' name='password' id='password' />\n                                <label for='password'>Re-enter Your Password</label>\n                            </div>\n                        </div>\n\n                        <br />\n\n                            <div class='row'>\n                                <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect blue'>Register</button>\n                            </div>\n\n                    </form>\n                    <h6 class=\"center-align\">Already a member?  <a href=\"#!\">Signin</a></h6>\n                </div>\n\n\n            </div>\n\n    "
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map