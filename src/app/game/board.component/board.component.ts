import { Component, Input } from '@angular/core';
import { BoardField } from '../board-field';

@Component({
    selector: 'board',
    templateUrl: './board.component.html'
})
export class BoardComponent {

    @Input()
    fields: Array<BoardField> = [];
}
