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
var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'auth',
            styles: [
                "\n           .grid {\n              height: 100%;\n            }\n            background-color: #DADADA;\n            .image {\n               margin-top: -100px;\n            }\n            .column {\n               max-width: 450px;\n            }\n        "
            ],
            template: "\n        <div class=\"ui menu\">\n          <div class=\"ui container\">\n            <a class=\"header item\" routerLinkActive=\"active\" routerLink=\"/home\">Project ginsan</a>\n            <a class=\"header item\" routerLinkActive=\"active\" routerLink=\"/auth\">auth route</a>\n            <a class=\"header item\" routerLinkActive=\"active\" routerLink=\"/dashboard\">dashboard route</a>\n          </div>\n        </div>\n\n        <div class=\"ui middle aligned center aligned grid\">\n        <div class=\"column\">\n            <h2 class=\"ui teal image header\">\n            <div class=\"content\">\n                Log-in to your account\n            </div>\n            </h2>\n            <form class=\"ui large form\">\n            <div class=\"ui stacked segment\">\n                <div class=\"field\">\n                <div class=\"ui left icon input\">\n                    <i class=\"user icon\"></i>\n                    <input type=\"text\" name=\"email\" placeholder=\"E-mail address\">\n                </div>\n                </div>\n                <div class=\"field\">\n                <div class=\"ui left icon input\">\n                    <i class=\"lock icon\"></i>\n                    <input type=\"password\" name=\"password\" placeholder=\"Password\">\n                </div>\n                </div>\n                <div class=\"ui fluid large teal submit button\">Login</div>\n            </div>\n\n            <div class=\"ui error message\"></div>\n\n            </form>\n\n            <div class=\"ui message\">\n            New to us? <a href=\"#\">Sign Up</a>\n            </div>\n        </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map