import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Score } from '../../scoreboard/score';
import { ScoreboardRepository } from '../../scoreboard/scoreboard.repository';
import { GameRepository } from '../game.repository';
import { Game } from '../game';
import { OptionsRepository } from '../../options/options.repository';
import { BoardField } from '../board-field';
import { BoardSize } from '../board/board-size';
import { OptionsState } from '../../options/store/options-state';


@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: [
        './game.component.ngx.scss'
    ]
})
export class GameComponent implements OnInit, OnDestroy {

    fields: Array<BoardField> = [];

    boardSize: BoardSize;

    boardReady: boolean;

    mines: number = 0;

    gameFinished: boolean = false;

    private options: OptionsState;

    private gameSubscriptions: Subscription;
    private optionsSubscriptions: Subscription;

    constructor(private scoreRepository: ScoreboardRepository,
                private gameRepository: GameRepository,
                private optionsStore: OptionsRepository) {

        this.gameSubscriptions =
            this.gameRepository
                .getGame()
                .subscribe((game: Game) => {
                    this.fields = game.fields;
                    this.boardSize = game.boardSize;
                    this.boardReady = game.boardReady;
                    this.mines = game.countMines();
                    this.gameFinished = game.isFinished();
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

    finishGame(): void {
        this.gameRepository.finishGame();
    }

    createNewGame(): void {
        this.gameRepository.createNewGame();
    }

}
