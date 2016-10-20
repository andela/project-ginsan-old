import { Component, Inject, AfterViewInit } from "@angular/core";
import { InvitationService } from '../../shared/services/invitation.service';
import { Observable } from 'rxjs/Rx';


@Component({
    moduleId: module.id,
    selector: 'invites',
    templateUrl: './invites.component.html',
    styleUrls: ['./invites.component.css'],
    providers:[ InvitationService ]
})

export class InvitesComponent implements AfterViewInit {
    friendsList:any = [];
    users$:Observable<any>;
    userInput: string;
    constructor(@Inject (InvitationService) private getUserService: InvitationService) {
    }
    
    
    getUsers(): any {
        // this.userInput = 'menace';
        // this.getUserService.getUsers(this.token).subscribe(user => console.log(user),
        //     err => {
        //         console.log(err);
        //     });
    }

    showNoti() {
        this.getUsers();
        this.reload();
    }

    handleResponse(res):any {
        if(!res[0].status){
            this.friendsList = [];
        }
        this.friendsList = res;
    }

    reload():any {
        this.users$ = this.getUserService.getUsers('');
        this.users$.subscribe(
            user => this.friendsList = user
        );
    }
    handleError(){
        this.friendsList = [];
    }


    ngAfterViewInit() {
        this.showNoti();
        this.getUsers();

        const input:any = document.getElementById('type-user');
        console.log(input);

        const search$ = Observable.fromEvent(input, 'keyup')
                .do(() => console.log(input.value))
                .switchMap(() => this.getUserService.getUsers(input.value));
            search$.subscribe((next) => this.friendsList = next, (err) => 
            this.handleError());

    }    
    
    

    // openModal(){
    //     $('#invite-user').openModal();
    // }
}
