import { Component , Input , Output , EventEmitter } from '@angular/core';

@Component({ 
    moduleId: module.id,
    selector: 'answers-deck',
    templateUrl: './answers.component.html',
    styleUrls: ['./answers.component.css']
})
export class AnswersComponent {
    @Input() cards;
    @Output() card: EventEmitter<string> = new EventEmitter();

    isSpread : boolean = false;
    spreadStyle = {};

    constructor() {}

    //define methods belonging to this class here
    toggleSpread () {
        this.isSpread = !this.isSpread;
    }

    //
    getCardStyle(i:number) {
        return ((i)*(this.isSpread ? 9 : .5))+'%';
    }

    //
    getDeckStyle() {
        return this.isSpread ? 'fixed': 'relative';
    }

    //
    onSelect(card) {
        if(this.isSpread) {
            //get the card out of this componenet
            this.card.emit(card);
        }

        this.toggleSpread();
    }
    
}