import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-css',
    templateUrl: './css.component.html',
    styleUrls: ['./css.component.scss'],
    // encapsulation: ViewEncapsulation.Native,
    // encapsulation:ViewEncapsulation.Emulated
    // encapsulation: ViewEncapsulation.None
})
export class CssComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
