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
    // `  <div class="container">
    //     <div class="ui menu">
    //       <div class="ui container">
    //         <a class="header item" routerLinkActive="active" routerLink="/home">Project ginsan</a>
    //         <a class="header item" routerLinkActive="active" routerLink="/auth">auth route</a>
    //         <a class="header item" routerLinkActive="active" routerLink="/dashboard">dashboard route</a>
    //       </div>
    //     </div>
    //
    //     <h5 class="blue-text">Login</h5>
    //         <div class="section"></div>
    //
    //
    //             <div class="z-depth-1 grey lighten-4 row formStyle">
    //
    //                 <form class="col s12" method="post">
    //                     <div class='row'>
    //                         <div class='col s12'>
    //                         </div>
    //                     </div>
    //
    //                     <div class='row'>
    //                         <div class='input-field col s12'>
    //                             <input class='validate' type='email' name='email' id='email' />
    //                             <label for='email'>Enter your email</label>
    //                         </div>
    //                     </div>
    //
    //                     <div class='row'>
    //                         <div class='input-field col s12'>
    //                             <input class='validate' type='password' name='password' id='password' />
    //                             <label for='password'>Enter your password</label>
    //                         </div>
    //                         <label style='float: right;'>
		// 						<a class='pink-text' href='#!'><b>Forgot Password?</b></a>
		// 					</label>
    //                     </div>
    //
    //                     <br />
    //
    //                         <div class='row'>
    //                             <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect blue'>Login</button>
    //                         </div>
    //
    //                 </form>
    //             </div>
    //             <a class="center-align" href="#!">Create account</a>
    //
    //             <router-outlet></router-outlet>
    //         </div>
    `<router-outlet></router-outlet>`
    
})
export class AuthComponent {

}
