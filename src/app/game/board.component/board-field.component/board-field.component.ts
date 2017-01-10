import { Component, Input } from '@angular/core';

import { BoardField } from '../../board-field';

@Component({
    selector: 'board-field',
    templateUrl: './board-field.component.html'
})
export class BoardFieldComponent {

    @Input()
    boardField: BoardField;
}
