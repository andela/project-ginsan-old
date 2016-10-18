import { Component , Input } from '@angular/core';

@Component({ 
    moduleId: module.id,
    selector: 'user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
    @Input() details;
}