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
var LandingPage = (function () {
    function LandingPage() {
    }
    LandingPage = __decorate([
        core_1.Component({
            selector: 'landing-page',
            template: "\n         <div class=\"ui large top fixedmenu\" >\n            <div class=\"ui container\">\n              <a class=\"header item\" routerLinkActive=\"active\" routerLink=\"/home\">Project ginsan</a>\n              <a class=\"header item\" routerLinkActive=\"active\" routerLink=\"/auth\">auth route</a>\n              <a class=\"header item\" routerLinkActive=\"active\" routerLink=\"/dashboard\">dashboard route</a>\n              <a class=\"header item\" routerLinkActive=\"active\" routerLink=\"/game\">game screen</a>\n            </div>\n         </div>\n\n        <div class=\"ui main text container\" style=\"padding-top:15em; height:100%\">\n          <div class=\"ui text container\">\n            <h1 class=\"ui header\">\n              Imagine-a-Game where\n            </h1>\n            <h2>you laugh all the time.</h2>\n            <div class=\"ui huge primary button\">Get Started <i class=\"right arrow icon\"></i></div>\n          </div>\n        </div>\n\n        <div class=\"ui inverted vertical footer segment\" style='padding:4em 2em'>\n            <div class=\"ui container\">\n            <div class=\"ui stackable inverted divided equal height stackable grid\">\n                <div class=\"three wide column\">\n                <h4 class=\"ui inverted header\">About</h4>\n                <div class=\"ui inverted link list\">\n                    <a href=\"#\" class=\"item\">Sitemap</a>\n                    <a href=\"#\" class=\"item\">Contact Us</a>\n                    <a href=\"#\" class=\"item\">Religious Ceremonies</a>\n                    <a href=\"#\" class=\"item\">Gazebo Plans</a>\n                </div>\n                </div>\n                <div class=\"three wide column\">\n                <h4 class=\"ui inverted header\">Services</h4>\n                <div class=\"ui inverted link list\">\n                    <a href=\"#\" class=\"item\">Banana Pre-Order</a>\n                    <a href=\"#\" class=\"item\">DNA FAQ</a>\n                    <a href=\"#\" class=\"item\">How To Access</a>\n                    <a href=\"#\" class=\"item\">Favorite X-Men</a>\n                </div>\n                </div>\n                <div class=\"seven wide column\">\n                <h4 class=\"ui inverted header\">Footer Header</h4>\n                <p>Extra space for a call to action inside the footer that could help re-engage users.</p>\n                </div>\n            </div>\n            </div>\n        </div>\n      "
        }), 
        __metadata('design:paramtypes', [])
    ], LandingPage);
    return LandingPage;
}());
exports.LandingPage = LandingPage;
//# sourceMappingURL=landingpage.js.map