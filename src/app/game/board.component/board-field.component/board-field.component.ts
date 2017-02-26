import { Component, Input, Output, EventEmitter } from '@angular/core';

import { BoardField } from '../../board-field';
import { GameRepository } from '../../game.repository';
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
        
        .field.untouched {
            background: #337ab7;
        }
        
        .empty {
            background: #f5f5f5;
            color: #333;
        }
    
    `]
})
export class BoardFieldComponent {

    @Input()
    field: BoardField;

    @Input()
    position: number;


    constructor(private gameRepository: GameRepository,
                private gameService: GameService) {}


    showEmpty(): boolean {
        return !this.field.isMine() && !this.field.hasMines() && this.field.isRevelead();
    }

    showMine(): boolean {
        return this.field.isMine() && this.field.isRevelead();
    }

    showMinesCounter(): boolean {
        return this.field.hasMines() && this.field.isRevelead();
    }

    showMarked(): boolean {
        return this.field.isMarked();
    }

    reveal(): void {
        this.gameService.revealField(this.position);
    }

    mark(): boolean {
        this.gameService.markField(this.position);
        return false;
    }

}
