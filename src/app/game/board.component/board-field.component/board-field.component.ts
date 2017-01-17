import { Component, Input } from '@angular/core';

import { BoardField } from '../../board-field';

@Component({
    selector: 'board-field',
    templateUrl: './board-field.component.html',
    styles: [`
    
        .field {
            background: #f5f5f5;
            border: 1px solid #ccc;
            color: #333;
            display: inline-block;
            height: 24px;
            text-align: center;
            width: 24px;
        }
    
    `]
})
export class BoardFieldComponent {

    @Input()
    field: BoardField;
}
