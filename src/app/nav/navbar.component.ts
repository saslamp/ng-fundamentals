import { Component } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [
        `.nav.navar-nav { font-size: 15px},
        #searchForm {margi-right: 100px},
        @media (max-width: 1200px) {#searchForm {display: none}}`
    ]
})

export class NavBarComponent {}
