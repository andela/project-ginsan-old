import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';


@Injectable()
export class SignedInGuard implements CanActivate{

    constructor(@Inject (AuthService) private authService: AuthService,  @Inject (Router) private router:Router){
    }
    

    canActivate(){

        if (this.authService.isSignedIn()){
            return true;
        }else{
            this.router.navigate(['/auth/signin']);
            return false;
        }
    }
}