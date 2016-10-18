"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//custom imports
var landingpage_1 = require('./home/landingpage');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var auth_component_1 = require('./auth/auth.component');
var signin_component_1 = require('./auth/signin/signin.component');
var signup_component_1 = require('./auth/signup/signup.component');
var game_component_1 = require('./game/game.component');
var routes = [
    {
        path: 'home',
        component: landingpage_1.LandingPage
    },
    {
        path: 'auth',
        component: auth_component_1.AuthComponent,
        children: [
            {
                path: '',
                redirectTo: '/auth/signin',
                pathMatch: 'full'
            },
            {
                path: 'signin',
                component: signin_component_1.SigninComponent
            },
            {
                path: 'signup',
                component: signup_component_1.SignupComponent
            }
        ]
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'game',
        component: game_component_1.GameComponent
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
var MyRouterModule = (function () {
    function MyRouterModule() {
    }
    MyRouterModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [
                router_1.RouterModule
            ],
            declarations: [
                landingpage_1.LandingPage, dashboard_component_1.DashboardComponent, auth_component_1.AuthComponent, signin_component_1.SigninComponent, signup_component_1.SignupComponent
            ]
        })
    ], MyRouterModule);
    return MyRouterModule;
}());
exports.MyRouterModule = MyRouterModule;
