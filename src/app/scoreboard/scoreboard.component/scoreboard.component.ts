import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Score } from '../score';
import { ScoreRepository } from '../score.repository';

@Component({
    selector: 'scoreboard',
    templateUrl: './scoreboard.component.html',
    styleUrls: [
        './scoreboard.component.ngx.scss'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreboardComponent implements OnDestroy {

    scores: Array<Score> = [];

    private subscription: Subscription;

    constructor(private scoreRepository: ScoreRepository) {
        this.subscription = this.scoreRepository
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
        this.scoreRepository.resetScores();
    }

}
