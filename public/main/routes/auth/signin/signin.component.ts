import { Component } from '@angular/core';

@Component({
    selector: 'signin',
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

            .formStyle{
              margin-top: 60px;
            }

            .logo{
              margin-left:20px;
            }
        `
    ],
    template:
    `
    <nav class="blue darken-4">
      <div class="nav-wrapper">
          <a href="/home" class="brand-logo logo">cfh.io</a>
          <ul class="right hide-on-med-and-down">
              <li><a class="header item" routerLinkActive="active" routerLink="/home/">Home</a></li>
              <li class="active"><a class="header item" routerLinkActive="active" routerLink="/auth/signin">Login</a></li>
              <li><a class="header item" routerLinkActive="active" routerLink="/auth/signup">Signup</a></li>
          </ul>
      </div>
  </nav>
    <div class="valign-wrapper">

                <div class="z-depth-1 grey lighten-4 row valign formStyle">
                    <h5 class="blue-text center-align">Login</h5>
                    <form class="col s12" method="post">

                        <div class='row'>
                            <div class='input-field col s12'>
                                <input class='validate' type='email' name='email' id='email' />
                                <label for='email'>Enter your email</label>
                            </div>
                        </div>

                        <div class='row'>
                            <div class='input-field col s12'>
                                <input class='validate' type='password' name='password' id='password' />
                                <label for='password'>Enter your password</label>
                            </div>
                            <label style='float: right;'>
								<a class='pink-text' href='#!'><b>Forgot Password?</b></a>
							</label>
                        </div>

                        <br />

                            <div class='row'>
                                <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect blue'>Login</button>
                            </div>

                    </form>
                    <h6 class="center-align">Not a member yet?  <a href="#!">Signup</a></h6>
                </div>


            </div>

    `
})
export class SigninComponent {

}
