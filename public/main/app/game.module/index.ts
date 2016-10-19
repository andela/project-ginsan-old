//This is a barrel component whose purpose is to aggregate components and re-export them
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

import { TimerComponent }       from './timer/timer.component';
import { QuestionComponent }    from './question/question.component';
import { AnswersComponent }     from './answers/answers.component';
import { UserDetailsComponent } from './user/user-details';
import { FloorComponent }       from './floor/floor.component';

@NgModule({
    imports: [BrowserModule],
    exports: [
       TimerComponent,
       QuestionComponent,
       AnswersComponent,
       UserDetailsComponent,
       FloorComponent
    ],
    declarations: [
        TimerComponent,
        QuestionComponent,
        AnswersComponent,
        UserDetailsComponent,
        FloorComponent
    ]
})
export class GameModule { }