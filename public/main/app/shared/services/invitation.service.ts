import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from '../models/user.model';
import { Inject } from '@angular/core';

@Injectable()
export class InvitationService {
    constructor (@Inject (Http) private _http: Http) { }

    // pickPromise = fetch('./pick').then(res => res.json());

    private getUsersApi = 'http://localhost:3001/users/all';
    token:any = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODA4YWQ0N2IyY2MwY2JmNjAwMDAwMDEiLCJpYXQiOjE0NzY5OTM2NzksImV4cCI6MTQ3NzAwMzY3OX0.2pIiDCIlyuJ2pzwlSt_RQuZY5e1ZNpeJG8YNCbqrn78';

    getUsers(query=''):Observable<any>{
        let headers = new Headers({'Authorization':'Bearer ' + this.token});
        let sentQuery = new URLSearchParams();
        sentQuery.set('name', query);
        let options = new RequestOptions({search:sentQuery, headers:headers});
        
        return this._http.get(this.getUsersApi, options)
                        .do((res) => console.log(res.status, 'RES'))
                        .map((res:Response) => res.json())
                        .catch((error:any) => {
                            console.log(error.status, 'here is an error')
                           return Observable.throw(error.json().error || 'Server error')
                        });
                        
    }
}
