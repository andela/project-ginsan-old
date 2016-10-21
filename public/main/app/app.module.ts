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
import { AngularFireModule }       from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyBsGcVU62eKOMwKLu_o8KHrwn6Lh3x_4-Q',
  authDomain: 'cfhchat-c8c32.firebaseapp.com',
  databaseURL: 'https://cfhchat-c8c32.firebaseio.com',
  storageBucket: 'cfhchat-c8c32.appspot.com'
};


@NgModule({
    imports: [
        BrowserModule,
        MyRouterModule,
        GameModule,
        AngularFireModule.initializeApp(firebaseConfig)
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

export class AppModule { }