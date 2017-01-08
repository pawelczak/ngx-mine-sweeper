import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Score } from './score';
import { RESET_SCORES, INIT_SCORES, ADD_SCORE } from './actions';
import { ScoreRepository } from './score.repository';

@Injectable()
export class ScoreService {

    constructor(private store: Store<any>,
                private scoreRepository: ScoreRepository) {
        this.scoreRepository
            .findAll()
            .subscribe((scores: Array<Score>) => {
                this.store.dispatch({type: INIT_SCORES, payload: scores});
            });
    }

    getScores(): Observable<Array<Score>> {
        return this.store.select('scoreReducer');
    }

    addScore(score: Score): void {
        this.store.dispatch({type: ADD_SCORE, payload: score});
    }

    resetScores(): void {
        this.store.dispatch({type: RESET_SCORES});
    }
}
