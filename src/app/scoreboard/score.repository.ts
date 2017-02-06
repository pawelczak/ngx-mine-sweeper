import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Score } from './score';
import { RESET_SCORES, ADD_SCORE } from './actions';
import { ScoresStore } from './scores-store';

@Injectable()
export class ScoreRepository {

    constructor(private store: Store<ScoresStore>) {}

    getScores(): Observable<Array<Score>> {
        return this.store.select('score')
                            .map((store: ScoresStore) => {
                                return store.scores;
                            });
    }

    addScore(score: Score): void {
        this.store.dispatch({type: ADD_SCORE, payload: score});
    }

    resetScores(): void {
        this.store.dispatch({type: RESET_SCORES});
    }
}
