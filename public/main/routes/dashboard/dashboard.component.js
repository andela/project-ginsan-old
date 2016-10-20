"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'game-dashboard',
            template: "\n        <div class=\"ui menu\">\n          <div class=\"ui container\">\n            <a class=\"header item\" routerLinkActive=\"active\" routerLink=\"/home\">Project ginsan</a>\n            <a class=\"header item\" routerLinkActive=\"active\" routerLink=\"/auth\">auth route</a>\n            <a class=\"header item\" routerLinkActive=\"active\" routerLink=\"/dashboard\">dashboard route</a>\n          </div>\n        </div>\n\n       <div class=\"ui main text container\">\n          <div class=\"ui text container center\" style='padding-top:7em'>\n            <img src='resources/images/image.jpg'>\n          </div>\n        </div> \n    "
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
