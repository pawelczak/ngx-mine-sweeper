import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Score } from './score';
import { ScoreboardState } from './scoreboard-state';
import * as ScoreboardActions from './actions';

@Injectable()
export class ScoreboardRepository {

    constructor(private store: Store<ScoreboardState>) {}

    getScoreboardState(): Observable<ScoreboardState> {
        return this.store.select('scoreboard');
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
