import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Score } from '../score';
import { ScoreRepository } from '../score.repository';

@Component({
    selector: 'scoreboard',
    templateUrl: './scoreboard.component.html'
})
export class ScoreboardComponent implements OnDestroy {

    scores: Array<Score> = [];

    private subscription: Subscription;

    constructor(private scoreService: ScoreRepository) {
        this.subscription = this.scoreService
                                .getScores()
                                .subscribe((scores: Array<Score>) => {
                                    this.scores = scores;
                                });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    isScoresEmpty(): boolean {
        return this.scores.length === 0;
    }

    resetScores(): void {
        this.scoreService.resetScores();
    }

}
