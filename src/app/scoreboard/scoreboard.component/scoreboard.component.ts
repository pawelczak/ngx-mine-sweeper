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

    constructor(private scoreboardRepository: ScoreboardRepository) {
        this.subscription = this.scoreboardRepository
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
        this.scoreboardRepository.resetScores();
    }

    setEasyDifficulty(): void {
        this.scoreboardRepository.changeDifficulty('EASY');
    }

    setNormalDifficulty(): void {
        this.scoreboardRepository.changeDifficulty('NORMAL');
    }

    setHardDifficulty(): void {
        this.scoreboardRepository.changeDifficulty('HARD');
    }


}
