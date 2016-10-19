"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//This is a barrel component whose purpose is to aggregate components and re-export them
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var timer_component_1 = require('./timer/timer.component');
var question_component_1 = require('./question/question.component');
var answers_component_1 = require('./answers/answers.component');
var user_details_1 = require('./user/user-details');
var floor_component_1 = require('./floor/floor.component');
var GameModule = (function () {
    function GameModule() {
    }
    GameModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            exports: [
                timer_component_1.TimerComponent,
                question_component_1.QuestionComponent,
                answers_component_1.AnswersComponent,
                user_details_1.UserDetailsComponent,
                floor_component_1.FloorComponent
            ],
            declarations: [
                timer_component_1.TimerComponent,
                question_component_1.QuestionComponent,
                answers_component_1.AnswersComponent,
                user_details_1.UserDetailsComponent,
                floor_component_1.FloorComponent
            ]
        })
    ], GameModule);
    return GameModule;
}());
exports.GameModule = GameModule;
