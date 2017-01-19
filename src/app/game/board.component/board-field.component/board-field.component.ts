import { Component, Input } from '@angular/core';

import { BoardField } from '../../board-field';
import { GameService } from '../../game.service';

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

    constructor(private gameService: GameService) {}

    // TODO refactor this


    showEmpty(): boolean {
        return !this.field.hasMines() && this.field.isRevelead();
    }

    showMine(): boolean {
        return this.field.isMine() && this.field.isRevelead();
    }

    showMinesCount(): boolean {
        return this.field.hasMines() && this.field.isRevelead();
        // return this.field.isMine() && this.field.isRevelead();
    }

    showMarked(): boolean {
        return this.field.isMarked();
    }
}
