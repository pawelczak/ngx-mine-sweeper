import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ADD_SCORE } from '../scoreboard/actions';
import { Score } from '../scoreboard/score';
import { ScoreService } from '../scoreboard/score.service';
import { BoardField } from './board-field';

@Component({
    selector: 'game',
    templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {

    private fields: Array<BoardField> = [];

    constructor(private store: Store<any>,
                private scoreService: ScoreService) {

    }

    ngOnInit() {
        this.store.dispatch({type: ADD_SCORE, payload: new Score('Jane Gray', '3:49', 'easy')});
    }

    addScore(): void {
        this.scoreService.addScore(new Score('Johny Tester', '12:34', 'easy'));
    }
}
