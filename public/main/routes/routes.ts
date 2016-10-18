//
import { NgModule }                from '@angular/core';
import { RouterModule , Routes }   from '@angular/router';

//custom imports
import { LandingPage }             from './home/landingpage';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { AuthComponent }           from './auth/auth.component';
import { GameComponent }           from './game/game.component';
    
const routes:Routes = [
    {
        path: 'home',
        component: LandingPage
    },
    {
        path: 'auth',
        component: AuthComponent
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
        LandingPage, DashboardComponent, AuthComponent
    ]
})
export class MyRouterModule {}
