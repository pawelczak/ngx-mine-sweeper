import { Component, OnDestroy } from '@angular/core';

import { Score } from '../score';
import { ScoreService } from '../score.service';

@Component({
    selector: 'scoreboard',
    templateUrl: './scoreboard.component.html'
})
export class ScoreboardComponent implements OnDestroy {

    scores: Array<Score> = [];
    private subscription: any;

    constructor(private scoreService: ScoreService) {
        this.subscription = this.scoreService.getScores()
                    .subscribe((scores: Array<Score>) => {
                        this.scores = scores;
                    });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    resetScores(): void {
        this.scoreService.resetScores();
    }

}
