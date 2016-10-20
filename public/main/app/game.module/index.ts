import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { TimerComponent }       from './timer/timer.component';
import { QuestionComponent }    from './question/question.component';
import { AnswersComponent }     from './answers/answers.component';
import { UserDetailsComponent } from './user/user-details';
import { FloorComponent }       from './floor/floor.component';
import { InvitesComponent }      from './invites/invites.component';
import { InvitationService } from './../shared/services/invitation.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
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
        InvitesComponent,
        AnswersComponent,
        UserDetailsComponent,
        FloorComponent
    ],
    providers:[ InvitationService ]
})
export class GameModule { }