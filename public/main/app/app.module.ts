//Core modules imports
import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { HttpModule }      from '@angular/http';
import { FormsModule }   from '@angular/forms';


//custom imports for modules
import { MyRouterModule  }            from '../routes/routes';
import { GameModule }         from './game.module/index';

//custom imports for components
import { AppComponent }       from './app.component';

//custom imports for routes components

import { GameComponent }      from '../routes/game/game.component';

//imports for custom services
import { AuthService }  from './shared/services/auth/auth.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        MyRouterModule,
        GameModule
    ],
    declarations: [
        AppComponent,
        GameComponent
    ],
    providers: [AuthService],

    bootstrap: [AppComponent]
})
//
export class AppModule { }
