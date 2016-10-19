import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {
  private signedIn = false;

  constructor(private http: Http){
    this.signedIn = !!localStorage.getItem('auth_token')
  }

  signUp(name, email, password) {
    console.log(email, name, password, 'info?')
    let headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http
      .post(
        '/api/auth/signup',
        JSON.stringify({ name, email, password }),
        { headers: headers }
      )

      .map(res => res.json())
      .map((res) => {
        if(res.success) {
          localStorage.setItem('auth_token', 'Bearer ' + res.auth_token);
          this.signedIn = true;
        }


        return res.success;
      });
  }

  signIn(email, password){
    let headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http
      .post(
        '/api/auth/login',
        JSON.stringify({ email, password }),
        { headers }
      )

      .map(res => res.json())
      .map((res) => {
        if(res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.signedIn = true;
        }
      })
  }

  signOut() {
    localStorage.removeItem('auth_token');
    this.signedIn = false;
  }

  isSignedIn(){
    return this.signedIn
  }
}
