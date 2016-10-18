import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'floor',
    templateUrl: './floor.component.html',
    styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnChanges {
    @Input() card: string;
    cards = [];
    animate = false;

    addAnimation() {
        this.animate = true;
    }

    //
    constructor() { }

    //Implementation of change detection interface
    ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        if (changes['card'].currentValue) {
            this.cards.unshift(changes['card'].currentValue);
            this.addAnimation();
        }
    }

}