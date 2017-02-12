import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Score } from './score';
import { SCOREBOARD_RESET_SCORES, SCOREBOARD_ADD_SCORE, SCOREBOARD_CHANGE_DIFFICULTY } from './actions';
import { ScoreboardStore } from './scoreboard-store';

@Injectable()
export class ScoreboardRepository {

    constructor(private store: Store<ScoreboardStore>) {}

    getScoreboardState(): Observable<ScoreboardStore> {
        return this.store.select('scoreboard');
    }

    addScore(score: Score): void {
        this.store.dispatch({type: SCOREBOARD_ADD_SCORE, payload: score});
    }

    resetScores(): void {
        this.store.dispatch({type: SCOREBOARD_RESET_SCORES});
    }

    changeDifficulty(difficulty: string): void {
        this.store.dispatch({type: SCOREBOARD_CHANGE_DIFFICULTY, payload: difficulty});
    }
}
