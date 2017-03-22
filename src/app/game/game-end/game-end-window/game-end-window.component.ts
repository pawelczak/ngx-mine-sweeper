import { Component, OnInit, Input } from '@angular/core';

import { GameEnd } from '../game-end';

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

    @Input()
    gameEnd: GameEnd;

    ngOnInit() {
        // $('#game-end-modal').modal({show: true});
    }
}
