import { Component, OnInit, Input } from '@angular/core';

import { GameEnd } from '../game-end';
import { GameEndService } from '../game-end.service';
import { GameService } from '../../game.service';


@Component({
    selector: 'game-end-window',
    templateUrl: './game-end-window.component.html',
    styleUrls: [
        './game-end-window.component.ngx.scss'
    ]
})
export class GameEndWindowComponent implements OnInit {

    @Input()
    gameEnd: GameEnd;

    scoreSaved: boolean = false;

    constructor(private gameService: GameService,
                private gameEndService: GameEndService) {
    }

    ngOnInit() {
        // $('#game-end-modal').modal({show: true});
    }

    newGame(): void {
        this.gameService.startNewGame();
    }

    saveScore(): void {
        this.scoreSaved = true;
        this.gameEndService.saveScore();
    }


}
