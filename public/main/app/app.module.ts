//Core modules imports
import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

//custom imports for modules
import { MyRouterModule  }            from '../routes/routes';
import { GameModule }         from './game.module/index';

//custom imports for components
import { AppComponent }       from './app.component';

import { HttpModule }    from '@angular/http';

import { InvitationService }    from '././shared/services/invitation.service';

//custom imports for routes components

import { GameComponent }      from '../routes/game/game.component';

@NgModule({
    imports: [
        BrowserModule,
        MyRouterModule,
        HttpModule,
        GameModule
    ],
    declarations: [
        AppComponent,
        GameComponent
    ],
    providers:[ InvitationService ],

    bootstrap: [AppComponent]
})
//
export class AppModule { }

