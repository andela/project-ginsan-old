import { Component , Input, Inject } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

declare var emoji : any;
declare var wdtEmojiBundle : any;


@Component({ 
    moduleId: module.id,
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})

export class ChatComponent {

    @Input() users;

    gameId : string = "osfosadpo48329qu3";

    user: string = 'La Belle Dame sans Merci';

    messages: FirebaseListObservable<{}>;


    // messages: { user: string, text: string}[] = [
    //     { user: 'Jim Bellion', text: 'Fantastic goal'},
    //     { user: 'Cortana', text: 'Behind you John'},
    //     { user: 'Vetinari', text: 'Do not let me detain you'},
    //     { user: 'Victor Hugo', text: 'La reine est horrible'},
    //     { user: 'Handsome Jack', text: 'I only want to kill you'},
    //     { user: 'Jim Bellion', text: 'Fantastic goal'},
    //     { user: 'Cortana', text: 'Behind you John'},
    //     { user: 'Vetinari', text: 'Do not let me detain you'},
    //     { user: 'Victor Hugo', text: 'La reine est horrible'},
    //     { user: 'Handsome Jack', text: 'I only want to kill you'}
    // ];

    newMessage: string;

    submit() : void {
        if(this.newMessage.length > 1){
            this.messages.push({ user: this.user, text: this.newMessage.trim() });
            //wait for ui update
            setTimeout(function(){
                wdtEmojiBundle.init('#new_message');
                this.scrollMessageDiv();            
            }.bind(this),200);
            this.newMessage = '';
        }
        else{
            this.newMessage = '';
        }
    }

    scrollMessageDiv() : void {
        let scrollelement = document.getElementById('chat-messages');
        scrollelement.scrollTop = scrollelement.scrollHeight;
    }

    constructor(@Inject(AngularFire)private angularFire: AngularFire) {
        this.messages = this.angularFire.database.list(`/${this.gameId}/messages`);
    }
}