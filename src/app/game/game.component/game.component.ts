import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Score } from '../../scoreboard/score';
import { ScoreboardRepository } from '../../scoreboard/scoreboard.repository';
import { GameRepository } from '../game.repository';
import { Game } from '../game';
import { OptionsRepository } from '../../options/repositories/options.repository';
import { BoardField } from '../board/board-field';
import { BoardSize } from '../board/board-size';
import { OptionsState } from '../../options/store/options-state';
import { Board } from '../board/board';
import { GameEnd } from '../game-end/game-end';
import { GameState } from 'src/app/game/store/game-state';


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

    game: GameState;

    private options: OptionsState;

    private gameSubscriptions: Subscription;
    private optionsSubscriptions: Subscription;

    constructor(private gameRepository: GameRepository,
                private optionsStore: OptionsRepository) {

        this.gameSubscriptions =
            this.gameRepository
                .getGame()
                .subscribe((state: GameState) => {
                    this.board = state.board;
                    this.boardReady = true;
                    this.mines = state.minesCount;
                    this.gameFinished = false;//game.isFinished();
                    this.game = state;
                });

        this.optionsSubscriptions =
            this.optionsStore
                .getOptions()
                .subscribe((options: OptionsState) => {
                    this.options = options;
                });
    }

    ngOnInit() {
        this.createNewGame();
    }

    ngOnDestroy() {
        this.gameSubscriptions.unsubscribe();
        this.optionsSubscriptions.unsubscribe();
    }

    createNewGame(): void {
        this.gameRepository.createNewGame();
    }

}
