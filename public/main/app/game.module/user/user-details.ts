import { Component , Input } from '@angular/core';

@Component({ 
    moduleId: module.id,
    selector: 'user-details',
    templateUrl: './user-details.tpl.html',
    styleUrls: ['./user-details.tpl.css']

})
export class UserDetailsComponent {
    @Input() details;
}