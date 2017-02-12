import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Score } from '../score';
import { ScoreboardRepository } from '../scoreboard.repository';
import { ScoreboardStore } from '../scoreboard-store';

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

    difficulty: string;

    private subscription: Subscription;

    constructor(private scoreRepository: ScoreboardRepository) {
        this.subscription = this.scoreRepository
                                .getScoreboardState()
                                .subscribe((scoreboard: ScoreboardStore) => {
                                    this.scores = scoreboard.scores;
                                    this.difficulty = scoreboard.difficulty;
                                });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    isDifficulty(difficulty: string): boolean {
        return this.difficulty === difficulty;
    }

    resetScores(): void {
        this.scoreRepository.resetScores();
    }

    setEasyDifficulty(): void {
        this.scoreRepository.changeDifficulty('EASY');
    }

    setNormalDifficulty(): void {
        this.scoreRepository.changeDifficulty('NORMAL');
    }

    setHardDifficulty(): void {
        this.scoreRepository.changeDifficulty('HARD');
    }


}
