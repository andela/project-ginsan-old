"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Core modules imports
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
//custom imports for modules
var routes_1 = require('../routes/routes');
var index_1 = require('./game.module/index');
//custom imports for components
var app_component_1 = require('./app.component');
//custom imports for routes components
var game_component_1 = require('../routes/game/game.component');
//imports for custom services
var auth_service_1 = require('./shared/services/auth/auth.service');
// Guard for routes protections
// import { SignedInGuard } from './shared/services/auth/signedin.guard';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                routes_1.MyRouterModule,
                index_1.GameModule
            ],
            declarations: [
                app_component_1.AppComponent,
                game_component_1.GameComponent
            ],
            providers: [auth_service_1.AuthService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
