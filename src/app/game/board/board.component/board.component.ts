import { Component, Input } from '@angular/core';

import { BoardSize } from '../board-size';


@Component({
    selector: 'board',
    templateUrl: './board.component.html'
})
export class BoardComponent {

    @Input()
    fields: any;

    @Input()
    size: BoardSize;

    @Input()
    ready: boolean;

    isReady(): boolean {
        return this.ready;
    }

}
