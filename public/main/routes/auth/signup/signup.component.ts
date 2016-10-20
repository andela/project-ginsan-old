import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../app/shared/services/auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css']
})

export class SignupComponent {
  name: String;
  // constructor(private authService: AuthService, private router:Router) {}

  onSubmit(e) {
    // e.preventDefault();
    // console.log(this.sname.value, 'values')
    // this.authService.signUp(this.name, this.email, this.password).subscribe((result) => {
    //   if (result) {
    //     this.router.navigate(['']);
    //   }
    // })
  }
}
