import { Component, Input } from '@angular/core';

@Component({
    selector: 'tab',
    template: `
                <div [hidden]="!active" class="" style="">
                    <ng-content></ng-content>
                </div>
            `
})

export class TabComponent {
    @Input('tabTitle') title: string;
    @Input() active = false;
}