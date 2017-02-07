import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: 'game-end-window',
    templateUrl: './game-end-window.component.html',
    styles: [`
    .modal {
        display: block;
    }
    `]
})
export class GameEndWindowComponent implements OnInit {

    ngOnInit() {
        // $('#game-end-modal').modal({show: true});
    }
}
