import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Score } from './score';
import { RESET_SCORES } from './actions';

@Component({
    selector: 'scoreboard',
    templateUrl: './scoreboard.component.html'
})
export class ScoreboardComponent implements OnDestroy {

    scores: Array<Score> = [];
    private subscription: any;

    constructor(private store: Store<any>) {
        this.subscription = this.store.select('scores')
                    .subscribe((scores: Array<Score>) => {
                        this.scores = scores;
                    });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    resetScores(): void {
        this.store.dispatch({type: RESET_SCORES});
    }

}
