import { Component, Input, Output, EventEmitter } from '@angular/core';

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
        
        .empty {
            color: #333;
        }
    
    `]
})
export class BoardFieldComponent {

    @Input()
    field: BoardField;

    @Input()
    position: number;


    constructor(private gameService: GameService) {}


    showEmpty(): boolean {
        return !this.field.isMine() && !this.field.hasMines() && this.field.isRevelead();
    }

    showMine(): boolean {
        return this.field.isMine() && this.field.isRevelead();
    }

    showMinesCounter(): boolean {
        return this.field.hasMines() && this.field.isRevelead();
        // return this.field.isMine() && this.field.isRevelead();
    }

    showMarked(): boolean {
        return this.field.isMarked();
    }

    reveal(): void {
        this.gameService.revealField(this.position);
    }

    mark(): void {
        this.gameService.markField(this.position);
    }
}
