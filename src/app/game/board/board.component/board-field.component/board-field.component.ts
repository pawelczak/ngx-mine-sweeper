import { Component, Input} from '@angular/core';

import { BoardField } from '../../../board-field';
import { GameService } from '../../../game.service';


@Component({
    selector: 'board-field',
    templateUrl: './board-field.component.html',
    styleUrls: [
        './board-field.component.ngx.scss'
    ]
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
