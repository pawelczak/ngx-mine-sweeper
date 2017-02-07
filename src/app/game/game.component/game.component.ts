import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Score } from '../../scoreboard/score';
import { ScoreRepository } from '../../scoreboard/score.repository';
import { GameRepository } from '../game.repository';
import { Game } from '../game';
import { OptionsRepository } from '../../options/options.repository';
import { Options } from '../../options/options';
import { BoardField } from '../board-field';


@Component({
    selector: 'game',
    templateUrl: './game.component.html'
})
export class GameComponent implements OnInit, OnDestroy {

    fields: Array<BoardField> = [];

    boardSize: any;

    boardReady: boolean;

    mines: number = 0;

    gameFinished: boolean = false;

    private options: Options;

    private gameSubscriptions: Subscription;
    private optionsSubscriptions: Subscription;

    constructor(private scoreRepository: ScoreRepository,
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
                .subscribe((options: Options) => {
                    this.options = options;
                });
    }

    ngOnInit() {
        this.initBoard();
    }

    ngOnDestroy() {
        this.gameSubscriptions.unsubscribe();
        this.optionsSubscriptions.unsubscribe();
    }

    addScore(): void {
        this.scoreRepository.addScore(new Score('Johny Tester', '12:34', 'easy'));
    }

    finishGame(): void {
        this.gameRepository.finishGame();
    }

    initBoard(): void {
        this.gameRepository.initBoard();
    }

}
