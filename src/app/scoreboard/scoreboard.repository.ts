import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, getScoreboard } from '../app.reducers';
import { Score } from './score';
import { ScoreboardState } from './store/scoreboard-state';
import { getScoreboardScores, getScoreboardDifficulty } from './selectors';
import { LocalStorage } from '../util/persist/local-storage';
import * as ScoreboardActions from './store/actions';


@Injectable()
export class ScoreboardRepository {

    private SCOREBOARD_KEY = 'ngx-mine-sweaper-scoreboard';

    constructor(private store: Store<AppState>,
                private localStorage: LocalStorage) {
        this.loadFromLocalStorage();
    }

    getScoreboardState(): Observable<ScoreboardState> {
        return this.store
                        .select(getScoreboard)
                        .do((state: ScoreboardState) => {
                            this.localStorage.setObject(this.SCOREBOARD_KEY, state);
                        });
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

    private loadFromLocalStorage(): void {
        this.store.dispatch(new ScoreboardActions.InitStateAction(this.getScoreboardStateFromLocalStorage()));
    }

    private getScoreboardStateFromLocalStorage(): ScoreboardState {
        return this.localStorage.getObject(this.SCOREBOARD_KEY) as ScoreboardState;
    }
}
