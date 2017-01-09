import { Component, Input } from '@angular/core';

import { BoardField } from '../../board-field';

@Component({
    selector: 'board-field',
    templateUrl: './board-field.component.ts'
})
export class BoardFieldComponent {

    @Input()
    boardField: BoardField;
}
