import { Component } from '@angular/core';

@Component({
    selector: 'game-dashboard',
    template: 
    `
        <div class="ui menu">
          <div class="ui container">
            <a class="header item" routerLinkActive="active" routerLink="/home">Project ginsan</a>
            <a class="header item" routerLinkActive="active" routerLink="/auth">auth route</a>
            <a class="header item" routerLinkActive="active" routerLink="/dashboard">dashboard route</a>
          </div>
        </div>

       <div class="ui main text container">
          <div class="ui text container center" style='padding-top:7em'>
            <img src='resources/images/image.jpg'>
          </div>
        </div> 
    `
})
export class DashboardComponent {

}