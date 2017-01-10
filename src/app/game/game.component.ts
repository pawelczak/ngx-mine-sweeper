import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ADD_SCORE } from '../scoreboard/actions';
import { Score } from '../scoreboard/score';
import { ScoreService } from '../scoreboard/score.service';
import { BoardField } from './board-field';
import { GameService } from './game.service';
import { Game } from './game';

@Component({
    selector: 'game',
    templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {

    fields: Array<BoardField> = [];

    boardReady: boolean;

    mines: number = 0;

    constructor(private store: Store<any>,
                private scoreService: ScoreService,
                private gameService: GameService) {

    }

    ngOnInit() {
        this.store.dispatch({type: ADD_SCORE, payload: new Score('Jane Gray', '3:49', 'easy')});

        this.gameService
            .getGame()
            .subscribe((game: Game) => {
                this.fields = game.fields;
                this.boardReady = game.boardReady;
                this.mines = game.countMines();
            });
    }

    addScore(): void {
        this.scoreService.addScore(new Score('Johny Tester', '12:34', 'easy'));
    }

}
