import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../app/shared/services/auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'signin',
    styleUrls: ['signin.component.css'],
    templateUrl: 'signin.component.html',
    providers:[ AuthService ]
})

export class SigninComponent {
    email: String;
    password: String;
    authCheck;

    constructor(@Inject (AuthService) authService: AuthService, private router:Router){
        this.authCheck = authService;
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.email, this.password);
        this.authCheck.signIn(this.email, this.password).subscribe((result) => {
            if (result.success) {
                console.log(result)
                localStorage.setItem('auth_token', result.token);
                this.authCheck.signedIn = true;
            }
        })
    }
}
