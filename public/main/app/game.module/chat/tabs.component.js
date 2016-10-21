"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var tab_component_1 = require('./tab.component');
var TabsComponent = (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngAfterContentInit = function () {
        /* get all active tabs */
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        /* if there are no active tabs set the first to active */
        if (!activeTabs.length) {
            this.selectTab(this.tabs.first);
        }
    };
    TabsComponent.prototype.selectTab = function (tab) {
        /* deactivate all tabs */
        this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
        /* activate the clicked tab */
        tab.active = true;
    };
    __decorate([
        core_1.ContentChildren(tab_component_1.TabComponent)
    ], TabsComponent.prototype, "tabs");
    TabsComponent = __decorate([
        core_1.Component({
            selector: 'tabs',
            template: "\n            <ul class=\"tabs\" style=\"margin-bottom:1em; text-align:center\">\n                <li class=\"tab col s6\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\" *ngFor=\"let tab of tabs\" style=\"background-color:#ccc; padding:0.1em;font-size:1.3em;  border-right:1px solid #fff\">\n                    <a href=\"javascript:\">{{tab.title}}</a>\n                </li>\n            </ul>\n            <ng-content></ng-content>\n            "
        })
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
