import { Component, Input } from '@angular/core';

import { Board } from '../board';


@Component({
    selector: 'board',
    templateUrl: './board.component.html'
})
export class BoardComponent {

    @Input()
    board: Board;

    @Input()
    ready: boolean;

    isReady(): boolean {
        return this.ready;
    }

}
