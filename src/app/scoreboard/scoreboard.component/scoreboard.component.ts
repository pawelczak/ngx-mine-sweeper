import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Score } from '../score';
import { ScoreboardRepository } from '../scoreboard.repository';
import { ScoreboardState } from '../store/scoreboard-state';
import { ModalWindowService } from '../../util/modal/modal-window.service';
import { ResetScoresWindowComponent } from './reset-scores-window.component/reset-scores-window.component';
import { ModalConfiguration } from '../../util/modal/modal-configuration';

@Component({
    selector: 'scoreboard',
    templateUrl: './scoreboard.component.html',
    styleUrls: [
        './scoreboard.component.ngx.scss'
    ]
})
export class ScoreboardComponent implements OnDestroy {

    scores: Array<Score> = [];

    difficulty: string;

    private subscription: Subscription;

    private resetModalConfiguration: ModalConfiguration;

    constructor(private scoreboardRepository: ScoreboardRepository,
                private modalWindowService: ModalWindowService) {

        this.subscription = this.scoreboardRepository
                                .getScoreboardState()
                                .subscribe((state: ScoreboardState) => {
                                    this.difficulty = state.difficulty;
                                    this.scores = this.filterScoresByDifficulty(state.scores);
                                });

        this.resetModalConfiguration = this.createResetScoreboardWindowConfig();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    isDifficulty(difficulty: string): boolean {
        return this.difficulty === difficulty;
    }

    resetScores(): void {

        this.modalWindowService
            .open(this.resetModalConfiguration, ResetScoresWindowComponent)
            .subscribe((response: boolean) => {
                if (response) {
                    this.scoreboardRepository.resetScores();
                }
            });
    }

    setDifficulty(difficulty: string): void {
        this.scoreboardRepository.changeDifficulty(difficulty);
    }

    private filterScoresByDifficulty(scores: Array<Score>): Array<Score> {
        return scores
                    .filter((score: Score) => {
                        if (score.difficulty === this.difficulty) {
                            return true;
                        }
                    });
    }

    private createResetScoreboardWindowConfig(): ModalConfiguration {
        let modalConfiguration = <ModalConfiguration>Object.create(null);

        modalConfiguration.title = 'Reset scoreboard';

        return modalConfiguration;
    }

}
