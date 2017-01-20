import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Score } from '../../scoreboard/score';
import { ScoreService } from '../../scoreboard/score.service';
import { GameService } from '../game.service';
import { Game } from '../game';
import { OptionsStore } from '../../options/options.store';
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

    private options: Options;

    private gameSubscriptions: Subscription;
    private optionsSubscriptions: Subscription;

    constructor(private scoreService: ScoreService,
                private gameService: GameService,
                private optionsStore: OptionsStore) {

        this.gameSubscriptions =
            this.gameService
                .getGame()
                .subscribe((game: Game) => {
                    this.fields = game.fields;
                    this.boardSize = game.boardSize;
                    this.boardReady = game.boardReady;
                    this.mines = game.countMines();
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
        this.scoreService.addScore(new Score('Johny Tester', '12:34', 'easy'));
    }

    finishGame(): void {
        this.gameService.finishGame();
    }

    initBoard(): void {
        this.gameService.initBoard();
    }

}
