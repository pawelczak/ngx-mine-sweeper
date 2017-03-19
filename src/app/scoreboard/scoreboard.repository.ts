import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, getScoreboard } from '../app.reducers';
import { Score } from './score';
import { ScoreboardState } from './scoreboard-state';
import * as ScoreboardActions from './actions';
import { getScoreboardScores, getScoreboardDifficulty } from './selectors';


@Injectable()
export class ScoreboardRepository {

    constructor(private store: Store<AppState>) {}

    getScoreboardState(): Observable<ScoreboardState> {
        return this.store.select(getScoreboard);
    }

    getScores(): Observable<Array<Score>> {
        return this.store.select(getScoreboardScores);
    }

    getDifficulty(): Observable<string> {
        return this.store.select(getScoreboardDifficulty);
    }

    addScore(score: Score): void {
        this.store.dispatch(new ScoreboardActions.AddScoreAction(score));
    }

    resetScores(): void {
        this.store.dispatch(new ScoreboardActions.ResetScoresAction());
    }

    changeDifficulty(difficulty: string): void {
        this.store.dispatch(new ScoreboardActions.ChangeDifficultyAction(difficulty));
    }
}
