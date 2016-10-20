import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../app/shared/services/auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css'],
    providers:[ AuthService ]
})

export class SignupComponent {
  name: String;
  email: String;
  password: String;
  authCheck;

  
  constructor(@Inject (AuthService) authService: AuthService, private router:Router) {
    this.authCheck = authService;
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.name,this.email, this.password, 'values')
    this.authCheck.signUp(this.name, this.email, this.password).subscribe((result) => {
      if (result.success) {
        console.log(result);
        localStorage.setItem('auth_token', 'Bearer ' + result.token);
        localStorage.setItem('user_id', 'Bearer ' + result.userId);
        this.authCheck.signedIn = true;
        this.router.navigate(['/']);
      }
    })
  }
}
