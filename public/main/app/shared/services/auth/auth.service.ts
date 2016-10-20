import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {
  private signedIn = false;
  _http;
  constructor(@Inject (Http) http: Http){
    this.signedIn = !!localStorage.getItem('auth_token')
    this._http = http;
  }

  signUp(name, email, password) {
    console.log(email, name, password, 'info?')
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers:headers});
    let data = JSON.stringify({ name:name, email:email, password:password })

    return this._http
      .post('/api/auth/signup', data ,options).map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  signIn(email, password){
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers:headers});
    let cred = JSON.stringify({email:email, password:password});

    return this._http
      .post('/api/auth/login',cred, options)
        .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  signOut() {
    localStorage.removeItem('auth_token');
    this.signedIn = false;
  }

  isSignedIn(){
    return this.signedIn
  }
}
