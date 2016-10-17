import { Component } from '@angular/core';

@Component({
    selector: 'auth',
    styles: [
        `
           .grid {
              height: 100%;
            }
            background-color: #DADADA;
            .image {
               margin-top: -100px;
            }
            .column {
               max-width: 450px;
            }
        `
    ],
    template: 
    `
        <div class="ui menu">
          <div class="ui container">
            <a class="header item" routerLinkActive="active" routerLink="/home">Project ginsan</a>
            <a class="header item" routerLinkActive="active" routerLink="/auth">auth route</a>
            <a class="header item" routerLinkActive="active" routerLink="/dashboard">dashboard route</a>
          </div>
        </div>

        <div class="ui middle aligned center aligned grid">
        <div class="column">
            <h2 class="ui teal image header">
            <div class="content">
                Log-in to your account
            </div>
            </h2>
            <form class="ui large form">
            <div class="ui stacked segment">
                <div class="field">
                <div class="ui left icon input">
                    <i class="user icon"></i>
                    <input type="text" name="email" placeholder="E-mail address">
                </div>
                </div>
                <div class="field">
                <div class="ui left icon input">
                    <i class="lock icon"></i>
                    <input type="password" name="password" placeholder="Password">
                </div>
                </div>
                <div class="ui fluid large teal submit button">Login</div>
            </div>

            <div class="ui error message"></div>

            </form>

            <div class="ui message">
            New to us? <a href="#">Sign Up</a>
            </div>
        </div>
        </div>
    `
})
export class AuthComponent {

}