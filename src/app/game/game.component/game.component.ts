import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { GameState } from '../store/game-state';
import { GameService } from '../game.service';
import { GameEnd } from './game-end/game-end';


@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: [
        './game.component.ngx.scss'
    ]
})
export class GameComponent implements OnInit, OnDestroy {

    board: any;

    boardReady: boolean = false;

    mines: number = 0;

    gameFinished: boolean = false;

    gameEnd: any = new GameEnd(false);

    private gameSubscriptions: Subscription;

    constructor(private gameService: GameService) {

        this.gameSubscriptions =
            this.gameService
                .getState()
                .subscribe((state: GameState) => {
                    this.board = state.board;
                    this.mines = state.minesCount;
                    this.gameEnd = state.finished;
                    this.boardReady = true;
                });
    }

    ngOnInit() {
        this.startNewGame();
    }

    ngOnDestroy() {
        this.gameSubscriptions.unsubscribe();
    }

    private startNewGame(): void {
        this.gameService.startNewGame();
    }

}
