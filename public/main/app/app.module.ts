//Core modules imports
import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';

//custom imports for modules
import { MyRouterModule  }         from '../routes/routes';
import { GameModule }              from './game.module/index';

//custom imports for components
import { AppComponent }            from './app.component';

//custom imports for routes components
import { LandingPage }             from '../routes/home/landingpage';
import { DashboardComponent }      from '../routes/dashboard/dashboard.component';
import { AuthComponent }           from '../routes/auth/auth.component';
import { GameComponent }           from '../routes/game/game.component';

@NgModule({
    imports: [
        BrowserModule,
        MyRouterModule,
        GameModule
    ],
    declarations: [
        AppComponent,
        GameComponent,
        LandingPage,
        DashboardComponent,
        AuthComponent
    ],

    bootstrap: [AppComponent]
})

//
export class AppModule { }