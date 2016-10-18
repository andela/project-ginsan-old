import { Component } from '@angular/core';

@Component({
    selector: 'signup',
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
              min-width: 35%;
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
              <li><a class="header item" routerLinkActive="active" routerLink="/auth/signin">Login</a></li>
              <li class="active"><a class="header item" routerLinkActive="active" routerLink="/auth/signup">Signup</a></li>
          </ul>
      </div>
  </nav>
    <div class="valign-wrapper">

                <div class="z-depth-1 grey lighten-4 row valign formStyle">
                    <h5 class="blue-text center-align">Register</h5>
                    <form class="col s12" method="post">

                        <div class='row'>
                            <div class='input-field col s12'>
                                <input class='validate' type='email' name='email' id='email' />
                                <label for='email'>Enter Your Email</label>
                            </div>
                        </div>

                        <div class='row'>
                            <div class='input-field col s12'>
                                <input class='validate' type='password' name='password' id='password' />
                                <label for='password'>Enter Your Password</label>
                            </div>
                        </div>

                        <div class='row'>
                            <div class='input-field col s12'>
                                <input class='validate' type='password' name='password' id='password' />
                                <label for='password'>Re-enter Your Password</label>
                            </div>
                        </div>

                        <br />

                            <div class='row'>
                                <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect blue'>Register</button>
                            </div>

                    </form>
                    <h6 class="center-align">Already a member?  <a href="#!">Signin</a></h6>
                </div>


            </div>

    `
})
export class SignupComponent {

}
