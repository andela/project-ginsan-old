//This is a barrel component whose purpose is to aggregate components and re-export them
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TimerComponent }       from './timer/timer.component';
import { QuestionComponent }    from './question/question.component';
import { AnswersComponent }     from './answers/answers.component';
import { UserDetailsComponent } from './user/user-details';
import { FloorComponent }       from './floor/floor.component';
import { ChatComponent }        from './chat/chat.component';
import { TabsComponent }        from './chat/tabs.component';
import { TabComponent }        from './chat/tab.component';


@NgModule({
    imports: [BrowserModule,FormsModule],
    exports: [
       TimerComponent,
       QuestionComponent,
       AnswersComponent,
       UserDetailsComponent,
       FloorComponent,
       ChatComponent,
       TabsComponent,
       TabComponent
    ],
    declarations: [
        TimerComponent,
        QuestionComponent,
        AnswersComponent,
        UserDetailsComponent,
        FloorComponent,
        ChatComponent,
        TabsComponent,
        TabComponent
    ]
})
export class GameModule { }