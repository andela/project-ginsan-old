import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'question-card',
    templateUrl: './question.tpl.html',
    styleUrls: ['./question.tpl.css']

})
export class QuestionComponent {
    //
    front = '';
    flip = false;

    //
    @Input() question: string;
    @Output() select: EventEmitter<any> = new EventEmitter();

    //Implement an interface for watching changes
    ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        if (changes['question'].currentValue) {
            console.log(changes['question'].currentValue);
            this.onNewCard(changes['question'].currentValue);
        }
    }

    //
    flipCard(): any {
        this.flip = !this.flip;
    }

    //
    onNewCard(card) {
        setTimeout(() => {
            this.front = card;
        }, 0.10);
        this.flipCard();
    }

    //
    onSelect() {
        this.select.emit();
    }
}