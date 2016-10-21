import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { TabComponent } from './tab.component';

@Component({
    selector: 'tabs',
    template: `
            <ul class="tabs" style="margin-bottom:1em; text-align:center">
                <li class="tab col s6" (click)="selectTab(tab)" [class.active]="tab.active" *ngFor="let tab of tabs" style="background-color:#ccc; padding:0.1em;font-size:1.3em;  border-right:1px solid #fff">
                    <a href="javascript:">{{tab.title}}</a>
                </li>
            </ul>
            <ng-content></ng-content>
            `
})

export class TabsComponent implements AfterContentInit {
    
    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

    ngAfterContentInit() {
        /* get all active tabs */
        let activeTabs = this.tabs.filter((tab) => tab.active);

        /* if there are no active tabs set the first to active */
        if(!activeTabs.length) {
            this.selectTab(this.tabs.first);
        }
    }

    selectTab(tab: TabComponent) {
        /* deactivate all tabs */
        this.tabs.toArray().forEach(tab => tab.active = false);
        /* activate the clicked tab */
        tab.active = true;
    }
}