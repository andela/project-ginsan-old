//Core modules imports
import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

//custom imports for modules
import { MyRouterModule  }            from '../routes/routes';
import { GameModule }         from './game.module/index';

//custom imports for components
import { AppComponent }       from './app.component';

//custom imports for routes components

import { GameComponent }      from '../routes/game/game.component';

@NgModule({
    imports: [
        BrowserModule,
        MyRouterModule,
        GameModule
    ],
    declarations: [
        AppComponent,
        GameComponent
    ],

    bootstrap: [AppComponent]
})
//
export class AppModule { }

