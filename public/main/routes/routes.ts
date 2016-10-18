//
import { NgModule }                from '@angular/core';
import { RouterModule , Routes }   from '@angular/router';

//custom imports
import { LandingPage }             from './home/landingpage';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { AuthComponent }           from './auth/auth.component';
import { SigninComponent }         from './auth/signin/signin.component';
import { SignupComponent }         from './auth/signup/signup.component';
import { GameComponent }           from './game/game.component';

const routes:Routes = [
    {
        path: 'home',
        component: LandingPage
    },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
          {
              path: '',
              redirectTo: '/auth/signin',
              pathMatch: 'full'
          },
          {
              path: 'signin',
              component: SigninComponent
          },
          {
              path: 'signup',
              component: SignupComponent
          }
        ]

    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'game',
        component: GameComponent
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule
    ],
    declarations: [
        LandingPage, DashboardComponent, AuthComponent, SigninComponent, SignupComponent
    ]
})
export class MyRouterModule {}
