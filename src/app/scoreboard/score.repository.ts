import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Score } from './score';
import { RESET_SCORES, ADD_SCORE } from './actions';

@Injectable()
export class ScoreRepository {

    constructor(private store: Store<any>) {}

    getScores(): Observable<Array<Score>> {
        return this.store.select('score');
    }

    addScore(score: Score): void {
        this.store.dispatch({type: ADD_SCORE, payload: score});
    }

    resetScores(): void {
        this.store.dispatch({type: RESET_SCORES});
    }
}
